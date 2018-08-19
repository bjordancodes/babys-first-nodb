const axios = require('axios');


let data = [];
let supertype= [];
let type= [];

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
    res.status(200).json(data);
};

const addPerson = (req, res, next) => {
    data.push(req.body);
    res.status(200).send(data);
}
console.log(supertype, type);
const deletePerson = (req, res, next) =>{
    const filtered = data.filter(val => val.id != req.params.id);
    data = filtered;
    res.status(200).send(data);
};

const changeType = (req, res, next) =>{

    let filtered = data.filter((e, i, arr)=> {e == supertype});
    data = filtered;
    res.status(200).json(data);
}
module.exports = {
    getPokemon,
    addPerson,
    deletePerson,
    changeType
};