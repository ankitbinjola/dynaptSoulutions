const MongoClient = require('mongodb').MongoClient;
const { request } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000 ;
const app = express();
const connString='mongodb+srv://mongodb:mongodb@dynapt.kjews.mongodb.net/test';
const mongoose = require('mongoose');
const postroutes = require('../src/routes/posts')
//middleware

app.use(bodyParser.json());

app.use('/posts', postroutes);


app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('hello server');
})


const server = app.listen(port , (error) => {
    if(error) return console.log(` ERROR == ${error}`);
    console.log(`server listening on port ${server.address().port}`);
})




// MongoClient.connect(connString, {
//     useUnifiedTopology: true
//   }, (err, db) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database');


//           // documents to be inserted
//           var docs = [{ username: "Udat", flag: "E" },
//           { username: "Karthik", flag: "D" },
//           { username: "Anil", flag: "E" }];



//       // insert multiple documents to 'users' collection using insertOne
//       db.collection("users").insertMany(docs, function(err, res) {
//         if (err) throw err;
//         console.log(res.insertedCount+" documents inserted");
//         // close the connection to db when you are done with it
//         db.close();
//     });

//   });

mongoose.connect(connString,{ useNewUrlParser: true }, ()=> {
  console.log("connected to db..");
})




