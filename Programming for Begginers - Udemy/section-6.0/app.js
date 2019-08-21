function desc_person( p ) {
    console.log(p.name + ' tiene una edad de ' + p.age + ' y mide ' + p.height);
    console.log(`${p.name} tiene una edad de ${p.age} y mide ${p.height}`);
}

var person = {
    name: 'Fernando',
    age: 32,
    height: 1.70
};

desc_person(person);