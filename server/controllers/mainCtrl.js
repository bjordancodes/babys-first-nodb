const axios = require('axios');


let data = [];
let favorites = [];
let deckList = [];
let id = 0;

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Grass`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Water`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Lightning`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Psychic`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Fighting`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Fire`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Darkness`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Metal`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Fairy`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Dragon`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));
    
    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Trainer`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

    axios
    .get(`https://api.pokemontcg.io/v1/cards?supertype=Energy`)
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

const getPokemon = (req, res, next) => {
    res.status(200).json({data, favorites, deckList});
};

// const getFavorites = (req, res, next) => {
//     res.status(200).json(favorites);
// }

const deletePokemon = (req, res, next) =>{
    console.log('maybe lets not with this one ' + req.params.id);
    console.log(favorites[0].id);
    const filtered = favorites.filter((e, i, arr) => {console.log('logging ' + e.id);return e.id != req.params.id});
    favorites = filtered;
    console.log('this is the end for ' + filtered)
    res.status(200).send(favorites);
};

const addFavorite = (req, res, next) =>{
    console.log('hi it me ' + req.query.id)
    console.log(data[req.query.id]);
    favorites.push(data[req.query.id]);
    res.status(200).send(favorites);
};

const updateDeck = (req, res, next) => {
    console.log(req.body);
    const {text} = req.body;
    const updateID = req.params.id;
    const deckIndex = deckList.findIndex( deckList => deckList.id == updateID);

    deckList[deckIndex].text = text;

    res.status(200).send(deckList);
};

const createDeck = (req, res, next) => {
    console.log('this is req.body ', req.body);
    console.log('this is req.params ', req.params);
    const {text} = req.body;
    deckList.push({id, text});
    id++;
    res.status(200).send(deckList);
}

const readDeck = (req, res, next) => {
    res.status(200).send(deckList);
}

const deleteDeck = (req, res, next) => {
    const deleteID = req.params.id;
    console.log(deleteID);
    // deckListIndex = deckList.findIndex(deckList => deckList.id == deleteID);
    // deckList.splice(deckList, 1);
    const filtered = deckList.filter((e, i, arr) => {console.log('logging ' + e.id);return e.id != req.params.id});
    deckList = filtered;
    console.log('this is the end for ', filtered)
    res.status(200).send(deckList);
}


console.log(`these are my ` + favorites);
module.exports = {
    getPokemon,
    deletePokemon,
    addFavorite,
    updateDeck,
    createDeck,
    readDeck,
    deleteDeck
};