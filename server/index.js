require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    app = express(),
    path = '/api/properties',
    controller = require('./controller'),
    { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        app.post(path, controller.createOne)
        app.get(path, controller.getAll)
        app.put(`${path}/:id`, controller.updateOne)
        app.delete(`${path}/:id`, controller.deleteOne)
        console.log(`it's ALIVE!`)
    })
    .catch(error => console.log(`oops, you have an error: ${error}`))

app.use(express.json())



app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} is listening`)
})