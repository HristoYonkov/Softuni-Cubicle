const express = require('express');

const app = express();

app.use('/static', express.static('public')); // Middleware wich will look for static files!!!...

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => console.log('Server is listening on port 3000'));