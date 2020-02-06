const mongoose = require('mongoose');

// Schema
const cakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 200
    },
    baker: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 300
    },
    ingredients: {
        type: [String],
        required: true,
        enum:['chocolate', 'flour', 'gluten free flour', 'eggs', 'milk', 'strawberry', 'vanilla', 'sugar']
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    expirationDate: {
        type: Date,
        default: Date.now()
    },
    isGlutenFree: {
        type: Boolean,
        default: false
    }
})

//Model
const Cake = mongoose.model('Cake', cakeSchema);

//Export
module.exports = Cake;