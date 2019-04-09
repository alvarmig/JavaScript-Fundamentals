var person1 = {
    name: 'Fernando',
    age: 32
};

var person2 = {
    name: 'Melissa',
    age: 27
};

var person3 = {
    name: 'Juan',
    age: 40
};

var persons = [person1, person2, person3];

for(var i = 0; i < persons.length; i++){
    
    console.log(`${persons[i].name} -- ${persons[i].age}`);
}
