function triangleArea(base, height) {
    var area;

    area = (base * height)/2
    area *= 100;
    area = Math.round(area) /100;

    console.log(area);
}

triangleArea(10,5);
