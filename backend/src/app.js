const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserController = require('./controllers/UserController');
const app = express();
const port = process.env.PORT || 5001;
const routes = require('./routes');
app.use(express.json());
app.use(cors());
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use(routes);
try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useUnifiedTopology: true,
  });
  console.log('mongodb connected');
} catch (error) {}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/get-med', async (req, res) => {
  const _prompt = req.body.data;
  console.log('entered prompt - ', _prompt);

  const prompt = `give me a list of medicines to overcome: \n`;

  if (!_prompt) {
    res.status(400).json({ error: 'Prompt missing' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GPT_KEY}`,
        },
      }
    );

    const generatedText = JSON.stringify(response.data);

    console.log(generatedText);
    res.status(201).json({ result: generatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
