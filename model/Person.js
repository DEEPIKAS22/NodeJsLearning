const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    Name:{
        type:'String',
        required:true
    },
    Job:{
        type:'String',
        enum: ['Doctor', 'Engineer', 'CA'],
        required: true
    },
    Age:{
        type: 'Number',
        required:false
    },
    Phone:{
        type: 'Number',
        required:true
    }
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;