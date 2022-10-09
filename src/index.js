const express = require('express');
const routes = require('./routes');
const app = express();
const { initializeDatabase } = require('./config/database');

require('./config/handlebars')(app);

app.use('/', express.static('./src/public')); // Middleware wich will look for static files!!!...
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initializeDatabase()
    .then(() => {
        app.listen(3000, () => console.log('Server is listening on port 3000'));
    })
    .catch((err) => {
        console.log(`Cannot connect to DB: - ${err}`);
    })