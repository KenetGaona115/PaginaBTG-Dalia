const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
//setings
app.listen(process.env.PORT || 3000, () => console.log('Listening'));
//Ubicaion de los archivos de html de Angular
app.use(express.static(path.join(__dirname, 'public/frontend/')))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

//middleware
app.use(express.urlencoded({ extended: false }));

//static
app.use(express.static(path.join(__dirname, 'public')))



module.exports = app;
