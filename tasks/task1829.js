// Implement a calculator function that performs basic calculation operations but the number of arguments provided is not known beforehand.
// ex: Addition of 9,4,12,16,23,43



// make validator method
const allTypes = ['number','string'];
const validator = ([...arg],type)=>{
    if(!allTypes.includes(type)){
        throw new Error('Value should be',allTypes) 
    }
    // the type arguement checks if the given array elements are of 'type' type
    return arg.every( item => typeof item === type )
    
}



// calculator function that takes a stream of input of numbers
function calculator(...num){

    if (validator(num,'number')){

    // reduce method 
    const sum = num.reduce((prev, curr) => prev + curr, 0);

    console.log(`The sum of the numbers is ${sum}`);

    return sum;
    }
    else{
        console.log("Please provide integer arguments only");
    }
}
(calculator(1,2,3)); // The sum of the numbers is 6
(calculator(8)); // The sum of the numbers is 6
(calculator(9,4,12,16,23,43)); // The sum of the numbers is 6
