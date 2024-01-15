const express = require('express');
const users = require("./MOCK_DATA.json");

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Laserpay");
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.listen(PORT, ()=> {
    console.log(`server is running at https://localhost:${PORT}`);
})