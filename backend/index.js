const connectToMongo = require('./config/db');
const express = require('express');
const app = express();
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
const port = 5000
connectToMongo();
app.use('/api/deatails',require('./routes/Product'))
app.listen(port,()=>{
    console.log(`listening on port at http://localhost:${port}`)
})