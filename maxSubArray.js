var maxSubArray = function(nums) {

    let max=nums[0];
    let prefix = 0;
    for(let i=0; i< nums.length;i++){
        if(prefix < 0){
            prefix = 0;
        }
        prefix = prefix+nums[i]
        max = Math.max(max,prefix)
    }
    return max
};
