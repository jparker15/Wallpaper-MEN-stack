require("dotenv").config();

const express = require("express");
const index = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 4500;

const connectURI = process.env.MONGO;

mongoose.connect(connectURI,{},() =>{
    
})