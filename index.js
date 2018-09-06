console.clear();
console.log('-[index.js]-');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fdb', { useNewUrlParser: true } )
    .then(()=>console.log('MongoDB has started'))
    .catch(e=>console.log(e));