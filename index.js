const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/filmdb");

const port = process.env.PORT || 3000;

const FavorisRouter = require('./routes/FavorisRoute');

// app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Bienvenue sur l'API des films");
});

app.use('/favoris', FavorisRouter);

app.listen(port, () => {
    console.log('Ca marche');
})


