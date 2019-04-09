function poundsKilograms(lb) {
    var kg;
    kg = (lb/2.2046) * 100;
    kg = Math.round(kg) /100;

    console.log(kg);
}

poundsKilograms(160);