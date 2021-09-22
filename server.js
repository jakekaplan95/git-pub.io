//Express Library
const express = require('express');

//App creation
const app = express();
const port = 3000;

//Drinks and food additon from models
const drinks = require("./models/drinks");
const food = require("./models/food");

//Initial first page
app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!");
});

//Drinks route
app.get('/drinks', (req, res) =>{
    res.render("drinks_index.ejs", {drinks: drinks
    });
});


// This is the code that I cannot get to work , linking the foods and drinks in the same index
// app.get('/food', (req, res) =>{
//     res.render("food_index.ejs", {food: food})
//     res.render("drinks_index.ejs", {drinks, drinks} );
// });

//Link to Specific Drinks
app.get('/drinks/:drinksIndex', (req, res) => {
    const drink = drinks[req.params.drinksIndex]
    res.render('drinks_show.ejs', {drink: drink});
});


//Listener
app.listen(3000, () => {
    console.log("listening");
});