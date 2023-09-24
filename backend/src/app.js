const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const UserController = require('./controllers/UserController');
const app = express();
const port = process.env.PORT || 3000;
const routes =require('./routes');
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV !=='production'){
  require('dotenv').config()
}

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use(routes);
try{
  mongoose.connect(process.env.MONGO_DB_CONNECTION,{
      useUnifiedTopology: true,
  })
  console.log("mongodb connected")
}catch(error){

}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

