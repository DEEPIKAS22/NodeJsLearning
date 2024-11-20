const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Welcome!');
})

const personRouter = require('./personRoute');
app.use('/person', personRouter);


app.listen(8000, ()=>{
    console.log('Server is listening  to port 3000!');
})