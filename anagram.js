/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;
    
    let sMap = {};
    let tMap = {};
    
    s.split("").forEach((e)=>{
        if(sMap[e])sMap[e]+=1
        else{
            sMap[e] = 1;
        }
    })
    
      t.split("").forEach((e)=>{
        if(tMap[e])tMap[e]+=1
        else{
            tMap[e] = 1;
        }
    })
    
    for(let e in sMap){
        if(sMap[e] !== tMap[e])return false
    }
    
    return true
};
