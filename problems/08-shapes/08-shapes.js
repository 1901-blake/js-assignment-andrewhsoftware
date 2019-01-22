/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let characterString = "";
  if(height > 0){
  if(shape === "Square") {
    for(i = 0;i < height; i++){
      let characterString = "";
      for(k = 0; k < height; k++){
        characterString = characterString.concat(character);
      }
      console.log(characterString)
    }
  } else if(shape === "Triangle") {
    let characterString = "";
    for(i = 0;i < height; i++){
        characterString = characterString.concat(character);
        console.log(characterString)
      }
    } else if(shape === "Diamond") {
      let str = '';
    for(let i=1; i<=height; i++){
        for(let k=1; k<=height-i; k++){
            str += " ";
        }
        for(var j=1; j<=i; j++){
            str += "* ";
        }
        console.log(str);
        str = "";
      }
    str = '';
    for(var i=height; i>=1; i--){
        for(var k=height; k>=i; k--){
            str += " ";
            }
            for(var j=i-1; j>=1; j--){
                str += character+" ";
            }
            console.log(str);
            str = "";
        }
    }
  }
}
printShape("Square", 5, "*");
printShape("Triangle",5,"*");
printShape("Diamond",5,"*");