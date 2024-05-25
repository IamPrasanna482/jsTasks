function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    // both should be objects => edge case
    if ((!isObject(obj1)) || (!isObject(obj2))) return false;

    const keysObj1 = Object.keys(obj1); // get all keys of obj1
    const keysObj2 = Object.keys(obj2); // get all keys of obj2

    // the no of keys of both the objects should be same
    if (keysObj1.length !== keysObj2.length) return false; 

    // for nested obejcts, we have to recursivly check for the values
    for (let key of keysObj1) {
        if ( !keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false; // the value 
        }
    }

    return true;
}

function assertObjectsEqual(actual, expected, description) {
    if (deepEqual(actual, expected)) {
        console.log("Passed !");
    } else {
        console.log("Failed !");
    }
}



var expected1 = { foo: 5, bar: 6 };
var actual1 = { foo: 5, bar: 6 };

assertObjectsEqual(actual1, expected1, 'detects that two objects are equal');

var expected2 = { foo: 6, bar: 5 };
var actual2 = { foo: 5, bar: 6 };
assertObjectsEqual(actual2, expected2, 'detects that two objects are equal');
