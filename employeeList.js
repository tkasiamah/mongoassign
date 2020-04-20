var http = require('http');
var fs = require(fs);
function onRequest(request, response){
   response.writeHead(200, {'Content-Type': 'text/html'});
   fs.readFile("./contact.html",null,function(error, data){
           if (error){
                response.writeHead(404);
                response.write('File not Found');
           } else{
              response.write(data);
           }
           response.end();
   });
   response.end();
}
http.createServer(onRequest).listen(3000);
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/employeedb';
mongoose.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));