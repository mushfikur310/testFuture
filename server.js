const express = require('express');
const app = express();

const movies = [
    {
        name: 'Planet 51',
        rating: 8,
        releasedOn: '20/10/1978'
    },
    {
        name: 'District 13',
        rating: 7,
        releasedOn: '20/10/1978'
    },
    {
        name: 'Looper',
        rating: 4,
        releasedOn: '20/10/1978'
    },
    {
        name: 'Corpse Bride',
        rating: 4,
        releasedOn: '20/10/1978'
    },
    {
        name: 'The Third Man',
        rating: 4,
        releasedOn: '20/10/1978'
    },
    {
        name: 'The Beach',
        rating: 4,
        releasedOn: '20/10/1978'
    },
    {
        name: 'Scarface',
        rating: 4,
        releasedOn: '20/10/1978'
    }
]

app.get('/movies', (req, res) => {
    res.json({
        movies
    });
});

app.listen(3090, (re, res) => {
    console.log("Server runnung at 3090");
});