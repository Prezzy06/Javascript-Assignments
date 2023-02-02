/*
    1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
    Cone with four decimal places using objects and classes.
    Create classes for volumes for each geometric shape which returns the
    output using the getVolume() method.

    eg- to get volume of cylinder-
    let obj= new Cylinder(radius,height);

    obj.getVolume();

    Formulas for volumes of the shapes-
    1) Cylinder- Volume = πr2h
    where r is the radius and h is the height of the cylinder.
    2)Sphere- Volume= 4/3πr3
    where r is the radius
    3) Cone- Volume= πr2h/3
    where r is the radius and h is the height of the cone.
*/

class Volume{
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
}

class Cylinder extends Volume{
    constructor(radius, height) {
        super(radius, height);
    }
    getVolume() {
        console.log(`Volume of Cylinder is ${(Math.PI*this.radius*this.radius*this.height).toFixed(4)}`);
    }
}

class Sphere extends Volume{
    constructor(radius, height) {
        super(radius, height);
    }
    getVolume() {
        console.log(`Volume of Sphere is ${(4*Math.PI*this.radius*this.radius*this.radius/3).toFixed(4)}`);
    }
}

class Cone extends Volume{
    constructor(radius, height) {
        super(radius, height);
    }
    getVolume() {
        console.log(`Volume of Cone is ${(Math.PI*this.radius*this.radius*this.height/3).toFixed(4)}`);
    }
}

let obj1 = new Cylinder(10, 10);
obj1.getVolume();

let obj2 = new Sphere(10, 10);
obj2.getVolume();

let obj3 = new Cone(10, 10);
obj3.getVolume();




