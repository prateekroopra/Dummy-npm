const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {

          var url = req.url;
          if(url ==='/'){
            fs.readFile(__dirname + '/public/index.html', function (err, data) {
              if (err) console.log(err);
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
              res.end();
            });
          }


    if(req.url.indexOf('.html') != -1){

        fs.readFile(__dirname + '/public/index.html', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });

    }

    if(req.url.indexOf('.js') != -1){

        fs.readFile(__dirname + '/public/js/scripts.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });

    }

    if(req.url.indexOf('.css') != -1){

        fs.readFile(__dirname + '/public/css/style.css', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });

    }

}).listen(8080);

console.log('Server running. Visit localhost:8080');
