var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(upload.array());

var user = require('./routes/user.js');
var affirmation = require('./routes/affirmation.js');

app.use(express.static(path.join(__dirname, 'client/build')));
// var uri = require('../.gitignore/mongodb_settings.js');
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// var db;
//
// // Connect to the database before starting the application server.
// mongodb.MongoClient.connect(uri || "mongodb://localhost:27017/my_db", function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//
//   // Save database object from the callback for reuse.
//   db = client.db();
//   console.log("Database connection ready");
// });


app.use('/api/user', user);
app.use('/api/affirmation', affirmation);


app.get('/', function(req, res){
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Node listening on port ${port}`);
});
