// 1. Import mongoose - require mongoose
const mongoose = require("mongoose");
const DB_NAME = "jokes_db";

0
mongoose.connect("mongodb://localhost/" + DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(
        `Established connection to ${DB_NAME}`))
    .catch( errObj => console.log(
        `something went wrong!`, errObj))