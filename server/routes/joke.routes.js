const JokeController = require('../controllers/joke.controllers');
// console.log(JokeController);


module.exports = app => {
    // Test Route
    app.get('/api/jokes/hello', (req, res) => {
        res.json({message: "hi"})
    })

    // CRUD Joke Routes
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.get('/api/jokes/random', JokeController.findOneSingleJoke);
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke);
}