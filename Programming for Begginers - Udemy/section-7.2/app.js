function kilometersMiles(km) {
    var mi;
    mi = (km * 0.62) * 100;
    mi = Math.round(mi) /100;

    console.log(mi);
}

kilometersMiles(10);
