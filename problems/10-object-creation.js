/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let Animal = {
    name: "Elephant",
    age: "old"

}
function Elephant(name, age) {
    this.name = name;
    this.age = age;
  }
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
      }
}
let thisElephant = new Elephant("dumbo", 20);
let Andrew = new Person("Andrew",25);
console.log(Animal);
console.log(thisElephant);
console.log(Andrew);