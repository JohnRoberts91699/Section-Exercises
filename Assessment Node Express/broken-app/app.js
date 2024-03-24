const express = require('express');
let axios = require('axios');
var app = express();

//Middleware for parsing JSON bodies
app.use(express.json());

app.post('/', async function(req, res, next) {
    try {
        const results = await Promise.all(req.body.developers.map(async d => {
            const response = await axios.get(`https://api.github.com/users${d}`);
            return response.data;
        }));
        const out = results.map(r => ({ name: r.name, bio: r.bio}));

        return res.json(out);
    } catch (err) {
        next(err); //Pass error to error handling middelware
    }
});


//Error handling middleware
app.use(function(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});