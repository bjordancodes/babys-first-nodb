const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const {getPokemon, deletePokemon, addFavorite, updateDeck, createDeck, readDeck, deleteDeck} = require('../server/controllers/mainCtrl');

const port = 3001;

const app= express();
app.use(cors());
app.use(json());


app.get('/api/people', getPokemon);
app.post('/api/people', addFavorite);
app.delete('/api/people/:id', deletePokemon);
app.post('/api/cards', createDeck);
app.get('/api/cards', readDeck);
app.put('/api/cards/:id', updateDeck);
app.delete('/api/cards/:id', deleteDeck);


app.listen(port, () => { console.log('Listening on port: ' + port)})