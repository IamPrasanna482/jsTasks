// Write an “assertObjectsEqual” function from scratch which take two object and string as parameter and return string.
// The examples below represent different use cases.

// var expected = {foo: 6, bar: 5};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
// output => True




// const _ = require('lodash');

// function assertObjectsEqual(actualObj, expectedObj, str){
//     console.log(_.isEqual(actualObj, expectedObj));
// }


// function compare(obj1, obj2){
//     var x = (obj1.sort());
//     return JSON.stringify(obj1) == JSON.stringify(obj2);
// }


// function assertObjectsEqual(actualObj, expectedObj, str){
//     return compare(actualObj,expectedObj);
// }

function assertObjectsEqual(actual, expected, message) {

    // function to compare the two objects 
    const isEqual = (obj1, obj2) => {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        // check if the number of keys are equal
        if (keys1.length !== keys2.length) {
            return false;
        }

        // use keys of obj1, and simultaneouly check for the correspoding key of object 2
        for (const key of keys1) {

            // check if the value of the key is another nested object
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                if (!isEqual(obj1[key], obj2[key])) {
                    
                    // goes till the last nested obejct and checks

                    return false;
                }

            } 
            // if the values of keys are not equal
            else if (obj1[key] !== obj2[key]) {

                //return false if values of the keys is not equal
                return false;
            }
        }

        return true;
    };


    if (isEqual(actual, expected)) {
        console.log("Passed");
    } else {
        console.log(`failed as expected is ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
    }
}


function main(){
    // var expected = {foo: 5, bar: {
    //     name : "prasanna",
    //     age : 22
    // }};
    // var actual = {foo: 5, bar: {
    //     name : "prasanna",
    //     age : 90
    // }}

    var expected = {
        foo : "5",
        bar : "6"
    }
    

    var actual = {
        foo : "5",
        bar : "6"
    }
    

    assertObjectsEqual(actual, expected, 'detects that two objects are equal'); // Passed

    var expected2 = {foo: 6,
                        bar: 5};
    assertObjectsEqual(actual, expected2, 'detects that two objects are equal'); // failed as expected is {"foo":6,"bar":5}, but got {"foo":5,"bar":6}

}

main()
