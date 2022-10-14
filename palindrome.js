var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
    
    let j= s.length-1;
    
    for(let i=0;i<s.length;i++){
        if(s[i]!==s[j])
        return false
        
        j--
    }
    
    return true
};
