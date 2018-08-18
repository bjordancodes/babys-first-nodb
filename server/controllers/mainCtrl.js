const axios = require('axios');

let data = [];

// axios
//     .get(`https://api.pokemontcg.io/v1/cards?standardLegal=${standardLegal}&supertype=${supertype}&types=${type}&pageSize=500`)
//     .then(res => data = (res.data.cards))
//     .catch(err => console.log(err));

// const getPokemon = (req, res, next, standardLegal, supertype, type) =>{
    axios
    .get('https://api.pokemontcg.io/v1/cards?supertype=Pokemon&types=Fire|Grass|Dragon')
    .then(res => data.push(...res.data.cards))
    .catch(err => console.log(err));

const getPokemon = (req, res, next) => {
    res.status(200).json(data);
};

const addPerson = (req, res, next) => {
    data.push(req.body);
    res.status(200).send(data);
}

const deletePerson = (req, res, next) =>{
    const filtered = data.filter(val => val.id != req.params.id);
    data = filtered;
    res.status(200).send(data);
};

module.exports = {
    getPokemon,
    addPerson,
    deletePerson,
};