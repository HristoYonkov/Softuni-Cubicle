const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

const app = express();
const { initializeDatabase } = require('./config/database');
const { auth } = require('./middlewares/authMiddleware');

require('./config/handlebars')(app);

app.use('/', express.static('./src/public')); // Middleware wich will look for static files!!!...
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(auth);
app.use(routes);

initializeDatabase()
    .then(() => {
        app.listen(3000, () => console.log('Server is listening on port 3000'));
    })
    .catch((err) => {
        console.log(`Cannot connect to DB: - ${err}`);
    })