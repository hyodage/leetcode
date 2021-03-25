// https://leetcode-cn.com/problems/maximum-product-subarray/
/* 
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组
（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
*/
/* 
思路：
1.同最大子序和类似，不过需要保存最小的情况，因为他可能会咸鱼翻身
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const maxProductMemo = []
    const minProductMemo = []
    maxProductMemo[0] = nums[0]
    minProductMemo[0] = nums[0]
    let max = nums[0]
    for(let i=1;i<nums.length;i++){
        maxProductMemo[i] = Math.max(nums[i],nums[i]*maxProductMemo[i-1],nums[i]*minProductMemo[i-1])
        minProductMemo[i] = Math.min(nums[i],nums[i]*maxProductMemo[i-1],nums[i]*minProductMemo[i-1])
        max = Math.max(max,maxProductMemo[i])
    }
    return max
};