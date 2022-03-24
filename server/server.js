const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ip = require("ip");
const {Sequelize, QueryTypes} = require('@sequelize/core');
const model = require('./models');

const app = express();
const port = 5000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/healthcheck', (req, res) => {
    res.send(`Server is available at ip: ${ip.address()}`);
});

app.get('/tasks', (req, res) => {
    model.sequelize.model('Task').findAll({}).then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err)
    })
});

app.post('/tasks', (req, res) => {
    model.sequelize.model('Task').create({
        text: req.body.text,
        isDone: req.body.isDone
    }).then(result =>
        res.json(result.dataValues)
    );
});

app.put('/tasks/:id', (req, res) => {
    model.sequelize.model('Task').update({isDone: req.body.isDone}, {
        where: {
            id: req.params.id,
        }
    }).then(result => {
        res.json(`The task ${req.params.id} has been updated`)
    }).catch(err => console.log(err))
});

app.delete('/tasks/:id', (req, res) => {
    model.sequelize.model('Task').destroy({
        where: {
            id: req.params.id,
        }
    }).then(result => {
        res.json(`The task ${req.params.id} has been deleted`)
    }).catch(err => console.log(err))
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))


