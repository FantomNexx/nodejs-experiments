const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 90,
        default: 20
    },
    /*
    phones : {
        type : [Number],
        default: []

    },
    */
    isMarried:{
        type: Boolean,
        default: false
    }
});

mongoose.model('persons', PersonSchema);
