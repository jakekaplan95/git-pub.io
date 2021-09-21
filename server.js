//Express Library
const express = require('express');

//App creation
const app = express();
const port = 3000;

//Drinks additon from models
const drinks = require("./models/drinks")

//Initial first page
app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!")
});

//Drinks route
app.get('/drinks', (req, res) =>{
    res.render("drinks_index.ejs", {drinks: drinks
    });
});


//Listener
app.listen(3000, () => {
    console.log("listening");
});