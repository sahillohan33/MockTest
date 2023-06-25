function moveZero(nums){
    let nonZeroIndex=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[nonZeroIndex]=nums[i];
            nonZeroIndex++;
        }
    }
    for(let i=nonZeroIndex;i<nums.length;i++){
        nums[i]=0;
    }
}
const nums=[0,1,3,0,12];
moveZero(nums);
console.log(nums);