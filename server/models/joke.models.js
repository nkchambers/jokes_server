// Import mongoose 
const mongoose = require('mongoose');


// The schema - the rules that the entries in the db must follow
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true})


// The model - this is what we use to make the actual queries to the db
const Joke = mongoose.model("Joke", JokeSchema);


// Export the model
module.exports = Joke;

