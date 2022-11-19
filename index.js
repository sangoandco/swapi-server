import fetch from "node-fetch";
import express, { response } from "express";
import swapi from "./Swapi/swapi.js";

const app = express()

app.get('/', (req, res) => {
    res.send('Hi There')
  });

swapi.base(fetch)

swapi.people(fetch)

app.listen(3001, () => {})