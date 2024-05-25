// Validator function to check if all elements in the array are of the specified type
const validator = (arg, type) => {
    // Ensure arg is always an array
    arg = Array.isArray(arg) ? arg : [arg];
// same as others
    switch (type) {
        case 'number':
            return arg.every(item => typeof item === 'number');
        case 'string':
            return arg.every(item => typeof item === 'string');
        case 'boolean':
            return arg.every(item => typeof item === 'boolean');
        case 'undefined':
            return arg.every(item => typeof item === 'undefined');
        case 'null':
            return arg.every(item => item === null);
        default:
            return false;
    }
};

// Calculator function to perform various operations
function calculator(operation, ...num) {

    // Validate that all arguments are numbers
    if (!validator(num, 'number')) {
        return 'All the given arguments must be numbers!';
    }

    // switch case to check and apply the operation
    let result;
    switch (operation) {

        case 'addition':
            result = num.reduce((prev, curr) => prev + curr, 0);
            break;

        case 'subtraction':
            result = num.reduce((prev, curr) => prev - curr);
            break;

        case 'multiply':
            result = num.reduce((prev, curr) => prev * curr, 1);
            break;

        case 'divide':
            if (num.slice(1).some(item => !item )) {
                throw new Error("Can't divide number by 0");
            }
            result = num.reduce((prev, curr) => prev / curr);
            break;

        case 'modulus':
            if (num.some(item => item === 0)) {
                throw new Error("Can't divide number by 0");
            }
            result = num.reduce((prev, curr) => prev % curr);
            break;

        default:
            return 'Invalid operation!';
    }

    return `The result of ${operation} is ${result}`;
}

// Example usage:
console.log(calculator('divide',0,10));
console.log(calculator('addition', 7, 4, 1)); // The result of addition is 12
console.log(calculator('subtraction', 9, 4, 1)); // The result of subtraction is 4
console.log(calculator('multiply', 1, 2, 9, 4)); // The result of multiply is 72
console.log(calculator('divide', 100, 2, 5)); // The result of divide is 10
console.log(calculator('divide', 0, 10)); // Can't divide number by 0
console.log(calculator('modulus', 100, 3)); // The result of modulus is 1
console.log(calculator('modulus', 100, 0)); // Can't divide number by 0
console.log(calculator('addition', 1, 'a', 3)); // All the given arguments must be numbers!
console.log(calculator('power', 2, 3)); // Invalid operation!
