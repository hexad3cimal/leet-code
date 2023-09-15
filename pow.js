/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    let b = Math.abs(n);
    let t = calc(x,b)
    
    if(n >0){
        return t
    }else{
        return 1/t
    }
};

function calc(x,n){
    if(n === 0){
        return 1
    }
    
    if(n%2===0){
        return calc(x * x,Math.floor(n/2))
    }
            return x* calc(x * x, Math.floor(n/2))

}
