const parensAreBalanced = (input) => {
  // console.log(input)
  if(input.length == 1){return false}
  
  const stack = [];
  for(let i = 0; i < input.length; i++){
    let el = input[i];
    if(el == '[' || el == '{' || el == '('){
      stack.push(el);
    }
    if(el == ']'){
      let last = stack.pop();
      if(last != '['){
        return false
      }
    } else if(el == '}'){
      let last = stack.pop();
      if(last != '{'){
        return false
      }
    } else if(el == ')'){
      let last = stack.pop();
      if(last != '('){
        return false
      }
    }
  }
  if(stack.length){
    return false;
  }
  
  return true;
}

module.exports = parensAreBalanced
