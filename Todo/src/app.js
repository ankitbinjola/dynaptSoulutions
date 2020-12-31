const { request } = require('express');
const express = require('express');
const port = 3000 ;
const app = express();
const connString='mongodb+srv://mongodb:mongodb@dynapt.kjews.mongodb.net/test';

app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('hello server');
})


const server = app.listen(port , (error) => {
    if(error) return console.log(` ERROR == ${error}`);
    console.log(`server listening on port ${server.address().port}`);
})

MongoClient.connect(connString, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })