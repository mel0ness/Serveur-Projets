const express = require("express");
const connectDB = require("./config/md");
const dotenv = require("dotenv").config();
const port = 5000;


connectDB();
const app = express();


// MiddleWare

app.use(express.json());
app.use(express.urlencoded({
    extended: true}
))

app.use("/post", require("./routes/post.routes"))
 
// Lancement serveur

app.listen(port, () => console.log("Le serveur a démarré au port " + port))