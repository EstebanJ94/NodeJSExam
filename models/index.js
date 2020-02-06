const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/cakesdb', {
    useNewURLParser: true,
    useUnifiedTopology:true
})
.then(() => console.log('Connected to CakesDB...'))
.catch(err => console.log(`Error connecting to DB: ${err}`));

//Exporting all models
module.exports.Cake = require('./cake');