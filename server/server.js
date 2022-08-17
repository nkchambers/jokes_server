const express = require("express");
const app = express();
const PORT = 8000;


//--------------- Middleware -----------------
app.use(express.json(), express.urlencoded({extended: true}));


//------------------- FULL SERVER CRUD STEPS -------------------------
// 1. Connect mongodb by requiring the file here
require("./config/mongoose.config");
// 2. Create mongoose schema
// 3. Use mongoose model to make CRUD functions -> talke to controller
// 4. Create routes to execute the functions to the db


//--------- OPTION 1 ---------
// Passing routes exported from app through server, only what's being exported
// >>>  store return in var, execute return and pass in app function
// const AllMyJokeRoutes = require("./routes/joke.routes");
// AllMyJokeRoutes(app);

//---------- OPTION 2 ----------
require("./routes/joke.routes")(app);


app.listen(PORT, () => console.log(`Server up on PORT: ${PORT}!!!`));
