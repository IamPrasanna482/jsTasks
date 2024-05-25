// Handle the following cases for all the calculation methods implemented.
// 1. When the argument provided is Not a number. (ex-string).
// 2. Number of parameters is less or more than the number of arguments.
// 3. Using a variable that is not declared.
// 4. Using a variable that is not initialized.

// Note:
// When validation fails return a statement why the following action is not executable.
// Make a single function for validation check, covering all scenarios whether it be a negative number or not a number or a zero etc
function Validator(...args) {
    if (args.some(item => typeof item !== 'number')) {
        return "Failed: All elements should be numbers!";
    }
    if (args.some(item => isNaN(item))) {
        return "Failed: Elements can't be NaN!";
    }
    if (args.some(item => item < 0)) {
        return "Failed: Elements can't be negative!";
    }
    if (args.some(item => typeof item === 'undefined')) {
        return "Failed: Elements can't be undefined!";
    }
    return "Validation is true!";
}

var b;
console.log(Validator(1, 2, 3)); // Validation is true!
console.log(Validator(1, 'a')); // Failed: All elements should be numbers!
console.log(Validator(2, 3, -5)); // Failed: Elements can't be negative!
console.log(Validator(1, b)); // Failed: Elements can't be undefined!
