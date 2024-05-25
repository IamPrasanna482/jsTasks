// Implement a calculator to perform the following operation
// 1. Square, sqr Root 
// 2. Log, ln
// 3. sin, tan, and cos
// 4. X to the power Y
// 5. Area of the circle.

// Note:
// * handle cases for a negative number
// * use proper variable declaration


function validator([...arg],type){
    if(!arg.every((item) => typeof(item)==='number')){
        console.log("Enter a number only !");
        return 0;
    }
    else if(arg.some((item) => item<0)){
        console.log("Enter a positive number only !");
        return 0;
    }
    return 1;
}



function Calculator([...num], operation) {
    if (validator(num, 'number')) {
        if (operation === 'power') {
            if (num.length === 2) {
                return Math.pow(num[0], num[1]);
            }
            return "Enter 2 arguments only for power operation!";
        } 
        else if(operation == 'area'){
            if (num.length === 1) {
                return (3.14)*(Math.pow(num[0],2));
            }
            return "Enter 1 argument only for area operation!";
        }
        else if (Math[operation] && typeof Math[operation] === 'function') {
            if (num.length === 1) {
                return Math[operation](num[0]);
            } else {
                return `Enter 1 argument only for ${operation} operation!`;
            }
        } else {
            return `Operation "${operation}" not supported or invalid!`;
        }
    } else {
        return "Invalid arguments!";
    }
}

console.log(Calculator([2,3], 'power'));
console.log(Calculator([36], 'sqrt'));
console.log(Calculator([34], 'sin'));
console.log(Calculator([39], 'cos'));
console.log(Calculator([98], 'tan'));
console.log(Calculator([12], 'area'));

