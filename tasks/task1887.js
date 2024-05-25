// Write an implementation of a function that generate a query string URL of object.
// The method take object and URL as parameter and return string ,
// where every key-value pair converted into query string.


// {
//   "keyOne": "value One",
//   "keyTwo": "value Two",
//   "keyThree": "value Three",
// }

// url:"https://localhost:400",



// https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three

function generateQueryString(object, urlString){

    if(!Object.entries(object).length || !urlString.length){
        return "Enter valid arguments !";
    }
    
    var resultantString = urlString + '?';

    for(const [key, value] of Object.entries(object)){
        resultantString += (key.toLowerCase() + '=');
        resultantString += (value.toLowerCase() + '&');  // convert to lowercase and add a '&
    }
    return resultantString.slice(0,resultantString.length-1);


}


function main() {


obj = {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
}
var url = "https://localhost:400";

console.log(generateQueryString(obj,url));
}

main()
