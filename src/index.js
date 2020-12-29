const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');


// Settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);


// Middlewares
app.use(morgan('common'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Starting server
app.use('/api/productos', require('./routes/productos'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})