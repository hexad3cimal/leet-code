/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    let sqrrt = 0;
    while((sqrrt * sqrrt) <= x) sqrrt++;
    return sqrrt - 1;
};
