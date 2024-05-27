

// function to get the precedence, the precedence of + and - are equal to 1, * & / are equal to 2
function getPrecedence(ch) {
    if (ch == '+' || ch == '-') {
        return 1;
    } 
    else if (ch == '*' || ch == '/') {
        return 2;
    } 
}

function doOperation(ch1, ch2, op) {
    return eval(`${ch2} ${op} ${ch1}`);
}

function Evaluate(expression) {

    var stackOperand = []; // to store the operands (numbers)
    var stackOperator = []; // to store the operators 

    // iterate through the expression
    for (let ch of expression) {


        // if ch is '(', directly push it into the operator stack
        if (ch == '(') {
            stackOperator.push(ch);
        } 
        
        // if the ch is a number, push it in the operand stack
        else if (!isNaN(ch)) {
            stackOperand.push(Number(ch));
        } 
        
        // if ch is ')', do the following - 
        /*
            1. pop 2 operands
            2. pop 1 operator
            3. do the operation and push it, we do this to ensure that the evaultaion in the current (....) takes place
        */
        else if (ch == ')') {
           
            while (stackOperator.length && stackOperator[stackOperator.length - 1] != '(') {
                const op = stackOperator.pop();
                const ch1 = stackOperand.pop();
                const ch2 = stackOperand.pop();
                const result = doOperation(ch1, ch2, op);
                stackOperand.push(result);
            }

            stackOperator.pop(); // pop the '(' from the operator stack
        }

        // if the op is a operator, we do the following checks
        /*
            pop the values and do the operations until - 
            1. the operator stack is not empty
            2. until a opening bracket '(' is not met
            3. until the higher precedence operators are performed that are behind the current operator in the expression
        */
         else if (ch == '+' || ch == '-' || ch == '/' || ch == '*') {
           
            while (stackOperator.length && stackOperator[stackOperator.length - 1] != '(' && getPrecedence(ch) <= getPrecedence(stackOperator[stackOperator.length - 1])) {
                const op = stackOperator.pop();
                const ch1 = stackOperand.pop();
                const ch2 = stackOperand.pop();
                const result = doOperation(ch1, ch2, op);
                stackOperand.push(result);
            }
            stackOperator.push(ch);
        }
    }

    // chances of having opeartors in the stack
    while (stackOperator.length) {
        const op = stackOperator.pop();
        const ch1 = stackOperand.pop();
        const ch2 = stackOperand.pop();
        const result = doOperation(ch1, ch2, op);
        stackOperand.push(result);
    }

    return stackOperand[0];
}

console.log(Evaluate("1+(2+3)*4-8/2")); // 17
console.log(Evaluate("1+2")); // 3
