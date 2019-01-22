/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
// 0 is for remove, 1 is for add, 2 is for replace, since you don't have to use every parameter you can leave itemToAdd in there and it still works nicely
function spliceElement(someArr, operatorCall, index, itemToAdd) { //remove item at index
    let splicedArr = [];
    if(operatorCall === 0){
    for(let i = 0; i < someArr.length; i++){
        
        if(i !== index){
            splicedArr.push(someArr[i]);
        }
    }
    return splicedArr;
}
    if(operatorCall === 1) { //add item at index
    let splicedArr = [];
    for(let i = 0; i < someArr.length; i++){
        if(i === index){
            splicedArr.push(itemToAdd);
        }
        
        splicedArr.push(someArr[i]);
        
    }
    return splicedArr;
}
if(operatorCall === 2) { //replace item at index
    let splicedArr = [];
    for(let i = 0; i < someArr.length; i++){
        if(i === index){
            splicedArr.push(itemToAdd);
        }
        if(i !== index){
        splicedArr.push(someArr[i]);
        }
    }
    return splicedArr;

}
}
let someArr = [0,1,2,3,4,5];

let splicedArr = spliceElement(someArr,0,3);
console.log(splicedArr);
let splicedArr2 = spliceElement(someArr,1,3, 9);
console.log(splicedArr2);
let splicedArr3 = spliceElement(someArr,2,3,0);
console.log(splicedArr3);