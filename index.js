const { text } = require("express");
const express = require("express");
const app = express()
const sendMail = require('./mail.js')

//dossier statique ou il prend les fichiers.
app.use(express.static('public'));

// port + serveur sur ecoute 
app.listen(80,() => console.log("server listening on localhost:80"));

// GET method route, toujours renvoyer vers l'accueil en cas ou l'url ne contient que un /
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/Accueil.html');
});

// Mailing
//data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
  
app.post('/email', (req, res) => {
    const {email, Objet, Nom, Prenom, Message, Mobile} = req.body
    const text = "Nom entier : "+Nom +" "+ Prenom + " -- Numéro de téléphone: " + Mobile +" -- Adresse-email: "+ email + " -- Son message: " + Message;
    console.log('Data: ',req.body);
    
    sendMail(email, Objet,text, function(err, data) {
        if (err) {
            res.status(404).sendFile(__dirname + '/public/html/Erreur_404.html')
        } else {
            res.sendFile(__dirname + '/public/html/Compagnie.html');
        }
    })
});

// Erreur 404
app.use((req,res, next) => {
    res.status(404).sendFile(__dirname + '/public/html/Erreur_404.html')
})

