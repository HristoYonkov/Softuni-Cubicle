const express = require('express');
const hbs = require('express-handlebars');
const routes = require('./routes');
const app = express();

app.use('/', express.static('./src/public')); // Middleware wich will look for static files!!!...

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(routes);

app.listen(3000, () => console.log('Server is listening on port 3000'));