class Car{

    constructor(brand, type, doors){
        this.brand = brand;
        this.type = type;
        this.doors = doors;
        this.created = 'Hoy';
        this.started = false;
        this.gas = 100;
    }

    startEngine() {
        if(this.started) {
            console.error('Car already started');
        } else {
        this.started = true;
        console.log('Car is started');
        }
        return this;
    }

    trip(usage) {

        if(!this.started) return console.log('Car OFF');

        if( usage > this.gas ) return console.log('Can´t make trip: gas ' + this.gas)
       
            this.gas = this.gas - usage;
            return 'Gas remain ' + this.gas;
    }

}// END CLASS

var car = new Car('Mazda', 'Sedan', 2);

console.log(car);



