console.clear();
console.log('-[index.js]-');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fdb', {useNewUrlParser: true})
    .then(() => console.log(''))
    .catch(e => console.log(e));




require('./person.model');
const Person = mongoose.model('persons');

//create person data

let person_data = {
    name: 'Andreas',
    age: 98,
    phones: [38097111],
    isMarried: false
};

function CreatePerson(_person_data) {

    const person = new Person(_person_data);

    person.save()
        .then(result_person => console.log('good:', result_person))
        .catch(error => console.log('error:', error));
}//create_person


//CreatePerson(person_data);


async function AsyncCreatePerson(_person_data) {
    try {
        await new Person(_person_data).save();
        return true;
    }
    catch(error){
        console.log('[start]!!!!!!!!!!!Error:');
        console.log(error.message);
        console.log('[end]!!!!!!!!!!!Error:');
        return false;
    }
}


const DoMagic2 = async () => {
    let result = await AsyncCreatePerson(person_data);
    console.log('result:', result);
    let persons = await GetAll();
    console.log(persons);
};


/*
[
    {name: 'Jeremy', age: 25},
    {name: 'Amy', age: 30},
    {name: 'Dilan', age: 18},
].forEach(p => {
    new Person(p).save();
});
*/

/*
Person.find({name:'Amy',age:30}).then(persons => {
    console.log(persons)
});
*/

/*
Person.find({age: {'$in': [30, 18]}})
    .sort('age')
    .then(persons => {
    console.log(persons)
});
*/


/*
Person.find({name: 'Jeremy'})
        .then(persons => {
            console.log(persons)
        });
*/

const GetAll = async () => {
    return Person.find();
};

const AsyncDeletePerson = async () => {
    return Person.deleteOne({name: 'Jeremy'});
};

async function AsyncFuncDeletePerson(_name) {
    return Person.deleteOne({name: _name});
}

const DoMagic = async () => {
    let persons;
    let delete_result;

    console.log('...');
    console.log('----------------------');
    persons = await GetAll();
    console.log(persons);


    console.log('----------------------');
    delete_result = await AsyncFuncDeletePerson('Dilan');
    console.log(delete_result);
    console.log('----------------------');

    persons = await GetAll();
    console.log(persons);

    console.log('----------------------');
    console.log('...');
};


//DoMagic();

DoMagic2();
