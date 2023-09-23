const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, express");
});

app.listen(port, () => {
    console.log(`sever is running on ${port}`);
});

