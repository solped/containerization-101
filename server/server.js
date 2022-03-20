const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ip = require("ip");
const {Sequelize} = require('@sequelize/core');

const app = express();
const port = 5000;

app.use(cors());

const sequelize = new Sequelize('postgres', 'admin', 'admin', {
    // gimme postgres, please!
    host: "localhost",
    dialect: 'postgres',
    port: 5432
})


sequelize.authenticate()
    .then(r => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/healthcheck', (req, res) => {
    res.send(`Server is available at ip: ${ip.address()}`);
});

app.post('/tasks', (req, res) => {
    res.send("tasks have been saved successfully.")
});

app.get('/tasks', (req, res) => {
    res.send("Get all tasks successfully.")
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))


