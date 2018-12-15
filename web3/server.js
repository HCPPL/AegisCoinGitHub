//Set the path of app.js file for Server to invoke the APIs
var app = require('./src/app');
//If env file configured process.env.PORT will used else 3000 is default port
var port = process.env.PORT || 3000;

//Starts the Server to listen request and send response on the specified port
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
