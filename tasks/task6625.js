function numberOfChanges(string){
        var stack = []; // declaring an empty stack
        var answer = 0; // declaring 'answer' that counts the no. of changes

        for(let i=0;i<string.length;i++){

            if(string[i] == '{'){

                stack.push('{');
            
            }

            else if(string[i] == '}'){

                if(stack.length==0){
                        stack.push('{');
                        answer ++;

                }
                else{

                    stack.pop();


                }
            }
        }
        var n = stack.length;

        if(n%2==0){
            answer += n/2;
            console.log(`The string can be balanced with ${answer} changes !`);
        }

        else{
            console.log(`The string can't be balanced !`);
        }
}


var string = '{{}}}}';
numberOfChanges(string);
