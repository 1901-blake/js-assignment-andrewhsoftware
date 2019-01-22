/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(isNaN(startIndex) || isNaN(endIndex)){
        throw "Start or End is not a number";
    } 
    function isString (obj) {
        return (Object.prototype.toString.call(obj) === 'String]');
      }
    if(isString(someStr) === false){
        throw "Not a string";
    }
    let temp = someStr.split('');
    let subStr = '';
    for(i = startIndex; i < endIndex;i++){
        subStr += temp[i];
    }
    console.log(subStr);
}

try{
    substring(3,0,3);
    }
    catch(e){
        console.log(e);
    }
try{   
    substring("hello","e",3);
    }
    catch(e){
        console.log(e);
    }
try{
    substring("hello",0,"e");
    }
    catch(e){
        console.log(e);
    }