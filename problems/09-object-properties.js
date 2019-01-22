/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    const entries = Object.entries(someObj); //makes an array of array of the different properties and its values
    console.log(entries)
}
class Bike{
    constructor(frontGears, backGears, material){
        this.frontGears = frontGears;
        this.backGears = backGears;
        this.material = material;
    }
    ride() {
        console.log('you ride the bike');
    }
}
myBike = new Bike(12,1, "titanium");
objectProperties(myBike);