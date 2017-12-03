const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

app.get('/contoh', function(req, res) {
  res.send('hello guys');
});

exports.helloWorld = functions.https.onRequest(app);
