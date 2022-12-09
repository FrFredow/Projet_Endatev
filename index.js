const express = require("express");
const app = express()

app.use(express.static('public'));

app.listen(80,
    () => console.log("server listening on localhost:80")
    );

// GET method route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/Accueil.html');
  });

  
