const express = require('express'); //importamos express
const { getConnection } = require('./bd/db-connect-mongo');
const cors = require('cors');
require('dotenv').config();
const AuthRoute = require('./router/auth');

const app = express(); //creamos la definiicion llamada app
const host = '0.0.0.0';
const port = process.env.PORT; // creamos un puerto el cual es el 4000


//implementacion cors, a través del middleware
app.use(cors());

getConnection();

//Parseo JSON
app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/estado-equipo', require('./router/estadoEquipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipo-equipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));
app.use('/login', AuthRoute);

app.listen(port, host, () => { //empieza a escuchar peticiones http a través de un recurso o una url
    console.log('server started')
});