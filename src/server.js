const express  = require("express");
const session  = require("express-session");
const bcrypt   = require("bcrypt");
const mongoose = require("mongoose");
const path     = require("path");
const PORT     =8080; 
const app      = express();

app.listen(8080,()=>{
    console.log(`Listening on ${PORT}`)
});

//archivos staticos
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

//config req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const URL = "mongodb+srv://Zamu:42192083@cluster0.v5tsf.mongodb.net/passportDatabase?retryWrites=true&w=majority";

mongoose.connect(URL, {
    useNewUrlParser: true, useUnifiedTopology: true
},err=>{
    if(err) throw new Error("No se pudo conectar");
    console.log("db conectada")
});

