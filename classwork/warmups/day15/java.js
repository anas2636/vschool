var array = [];
var Car = function Car(color, model, miles) {
    this.color = color;
    this.model = model;
    this.miles = miles;
    this.run = function(){
        console.log("coor : " + this.color + "model : " + this.model + "miles : " + this.miles + " is running");
    }
};
//var car1 = new Car("red", "bmw", 1250ml);
//var car2 = new Car("green", "mercedes", 1100ml);
//var car3 = new Car("black", "2010", 1250ml);

array.push(new Car("red", "bmw", 1250));
array.push(new Car("green", "mercedes", 1100));
array.push(new Car("black", "2010", 1250));
