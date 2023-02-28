// Данный вариант работает, но не проходит по скорости работы. 
var maxSubArray = function(nums) {
    let resultOfSum = -999999;
    const maxCounter = nums.length;
    for (let c=0; c<maxCounter; c++) {
        let buffSum = 0;
        for (let i=c; i<maxCounter; i++) {
        buffSum = buffSum + nums[i];
        if (buffSum > resultOfSum) {
            resultOfSum = buffSum;
            }
        }
    };
    return resultOfSum;
};

//и другой вариант/ Он также работает, а также отлично проходит все проверти на скорость

const maxSubArray = function(nums) {

    let best = nums[0];
    let current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const lastNum = nums[i];
        const combined = current + lastNum;
        current = Math.max(lastNum, combined);
        best = Math.max(best, current);
    }
    return best;
}