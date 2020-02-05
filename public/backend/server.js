const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//connect to DB
const url = 'mongodb://127.0.0.1:27017/bakery'
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.once('open', _ => {
    console.log("Successful Connection", url);
    
    db.on("error", err => {
        console.error("Connection failed", err);
    })
})

//adding routes
const requestRouter = require('./routes/request')
app.use("/request", requestRouter);

const emailAlert = require("./routes/emailAlert");
app.use("/alert", emailAlert);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    
})