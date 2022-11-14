var isValid = function(s) {
    let stack =[]
    
    for(let i=0;i<s.length;i++){
        let c = s[i]
        if(c==='('){
            stack.push(')')
        }
       else if(c==='['){
            stack.push(']')
        }
          else if(c==='{'){
            stack.push('}')
        }else if(stack.pop() !== c){
            return false
        }
    }
    
    return  !stack.length
    
};
