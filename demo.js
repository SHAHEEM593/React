var twoSum = (nums, target) =>{
    for(i=0;i<nums.length;i++){
        // console.log(i)
        for(j=0;j<nums.length;j++){
            if(i+j===target){
                console.log(nums[i],nums[j])
            }
        }
    }
};
const value = twoSum([1,2,3,4,5,6],9)

console.log(value)
