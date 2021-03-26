// https://leetcode-cn.com/problems/product-of-array-except-self/
/* 
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，
其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积
*/
/* 
思路：
1.容易想到先循环把从左到右某个位置左边的乘积记录
然后在从右向左循环把右边的乘积记录在一个数组里
到了某个位置只需要找两个数组里前一个位置和后一个位置的乘积即可
这样做空间复杂度就会高
2.利用和1相同的思路，不过是将结果之间保存到一个数组里面返回
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const result = Array(nums.length).fill(1)
    let product = 1;
    for(let i=0;i<nums.length;i++){
        result[i] = result[i]*product
        product = product * nums[i]
    }
    product = 1;
    for(let i=nums.length-1;i>=0;i--){
        result[i] = result[i]*product
        product = product * nums[i]
    }
    return result
};