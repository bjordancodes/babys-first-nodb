const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const {getPokemon, addPerson, deletePerson} = require('../server/controllers/mainCtrl');

const port = 3001;

const app= express();
app.use(cors());
app.use(json());

app.get('/api/people', getPokemon);
app.post('/api/people', addPerson);
app.delete('/api/people/:id', deletePerson);
app.listen(port, () => { console.log('Listening on port: ' + port)})