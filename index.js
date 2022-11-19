import fetch from "node-fetch";
import express, { response } from "express";
import swapi from "./Swapi/swapi.js";
// const xxx = require("./swapi.js")

// const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('Hi There')
  });

swapi(fetch)

app.listen(3001, () => {})