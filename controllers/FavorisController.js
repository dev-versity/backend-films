const Film =  require('../models/Film');

const express = require('express');


exports.add = async (req, res) => {
    let newFilm = new Film(req.body);
    newFilm.save((error, film) => {
        if (error) console.error(error);
        res.send(film) 
        
    })
}   