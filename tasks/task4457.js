// Deepclone an object,
// we can use spread operator or assign operator but if the object is nested, deepclone is not done for the 
// nested values of the object, for that we have to use recursion

function deepClone(object) {

    // base case => if the arguemnt if not object
    if (object === null) {
        return object;
    }

    const clone = {};

    for (let key in object) {
        if (typeof object[key] === 'object' && object[key] !== null) {
            // recursively check for nested values of the object
            clone[key] = deepClone(object[key]);
        } else {
            clone[key] = object[key];
        }
    }

    return clone;
}

function main(){

    const obj1 = {
        a : 1,
        b : 2,
        c : {
            d : 1,
            e : 2
        }
    };

    const clonedObject = deepClone(obj1);
    console.log(clonedObject); // { a: 1, b: 2, c: { d: 1, e: 2 } }

}

main()
