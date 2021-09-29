const mongoose = require("mongoose");
const express = require('express')

const app = express()

const DATABASE = "mongodb://mymongo:27017/testup";

mongoose.connect(DATABASE)
.then( () => {
    console.log("DB Connected");
} )
.catch( () => {
    console.log("ERROR in DB Connection!");
} );


app.get("/", (req, res) => {
    res.json({
        message: "you are visiting ROOT route"
    });
} );

app.listen(8000, () => {
    console.log("8000 is ready to server...")
});