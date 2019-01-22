/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  for(let i = 0; i< numArray.length; i++){
        for(let j = 0; j < numArray.length-i-1; j++){
            if(numArray[j] > numArray[j+1]){
                let temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
            }
        }   
  }
  return numArray
}
let unsortedArray = [1,5,32,4,6,3,5,9,3,7];
console.log(bubbleSort(unsortedArray))
