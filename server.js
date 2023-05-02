require('dotenv').config();
const express = require('express');
const IP = require('ip');
const app = express();
const PORT = process.env.PORT;


app.all('/', (req, res)=>{
    res.json({
        'message': 'Hello from NodeOnEC2.'
    })
})

app.get('/serverip', (req, res)=>{
    res.json({
        'message': `Node is running on EC2 instance.`,
        'Private IP Address': IP.address()
    });
})


app.listen(PORT, ()=>{
    console.log(`Server is listening @ http://localhost:${PORT}`);
})