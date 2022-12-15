const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");

const cors = require("cars");
const { request, response } = require("express");
const stripe = require(stripe)(
  "sk_test_51K7IAVAHCREnOELIHKoG8LnkTkrBcr6LPFIDwC59JhJYfF3EH2sR4e50lp9pM9PwF9RdJKe11EEntkSDi4F1KgHa00BtRIGArs"
);

//API

// app config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API router
app.get("/", (request, response) => response.status(200).send("hello world"));

//Listen command
exports.api = functions.https.onRequest(app);
