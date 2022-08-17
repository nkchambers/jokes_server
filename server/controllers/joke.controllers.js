//CRUD 

// Controller is importing model to use when performing CRUD operations
const Joke = require("../models/joke.models");



//CRUD functions

module.exports = {
    
    // READ ALL JOKES
    findAllJokes : (req, res) => {
        // Same as db.jokes.find()
        Joke.find()
        // IMPORTANT - what we return here is what we receive in REACT!
            .then(allJokes => res.json({ jokes: allJokes, message: 
            'success' }))
            .catch(err => res.json({ message: 'Something went wrong',
            error: err }));
    },


    // READ ONE JOKE
    findOneSingleJoke : (req, res) => {
        // same as >>> /api/jokes/:id
        Joke.findOne({ _id: req.params.id })
            .then(oneSingleJoke => res.json({ joke: oneSingleJoke, message: 
            'success' }))
            .catch(err => res.json({ message: 'Something went wrong', 
            error: err }));
    },


    // CREATE NEW JOKE
    createNewJoke : (req, res) => {
        // Inside of function so you can log req.body
        // to see what's coming back from form
        //console.log(req.body);

        // ------ Destructuring object method -------
        //const {setup} = req.body;
        // Desctructured setup key so it can be used in function below
        //Joke.create({setup: setup, punchline: req.body.punchline})
        
        // Create Method - Same as db.jokes.Create({....})
        Joke.create(req.body)
            .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke, message: 
            'success' }))
            .catch(err => res.json({ message: 'Something went wrong',
            error: err }));
    },


    // UPDATE EXISTING JOKE
    updateExistingJoke : (req, res) => {
        // Coming from url route >>> /api/jokes/:id
        
        // ------- OPTION #1 -------
        // Joke.findOneAndUpdate(
        //     { _id: req.params.id },
        //     req.body,
        //     { new: true, runValidators: true }
        // )
        
        // -------- OPTION #2 ---------
        Joke.findByIdAndUpdate(req.params.id, req.body, 
        { new: true, runValidators: true})
            .then(updatedJoke => res.json({ joke: updatedJoke, message: 
            'success' }))
            .catch(err => res.json({ message: 'Something went wrong', 
            error: err }));
    },


    // DELETE EXISTING JOKE
    deleteAnExistingJoke : (req, res) => {
        // Coming from url route >>> /api/jokes/:id
        //-------- Destructuring Method ---------
        // const {id} = req.params
        // Joke.findByIdAndDelete(req.params.id)

        Joke.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result, message: 
            'success' }))
            .catch(err => res.json({ message: 'Something went wrong', 
            error: err }));
    }
}

