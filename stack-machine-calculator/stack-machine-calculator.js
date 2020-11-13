const stackMachineCalculator = (instructions) => {
  let input = instructions.split(" ")
  let stack = []

  for(let i = 0 ; i < input.length; i++){
    el = input[i];
    if(el == 'POP'){
      stack.pop();
    } 
    else if(el == 'DUP'){
      stack.splice(stack.length, 0, stack[stack.length-1]);
    }
    else if(el == '+'){
      stack.push(stack.pop() + stack.pop());
    }
    else if(el == '-'){
      stack.push(stack.pop()-stack.pop());
    } else {
      stack.push(Number(el));
    }
  }
  return stack[stack.length-1];
}

module.exports = stackMachineCalculator
