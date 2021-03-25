// https://leetcode-cn.com/problems/maximum-subarray/
/* 
给定一个整数数组 nums ，找到一个具有最大和的连续子数组
（子数组最少包含一个元素），返回其最大和。
*/
/* 
思路：
1.记录数组的第一个值到一个新数组，存放的是所有可能的最大值，假设第一个值就是最大的
2.循环数组，i得值与前面最大可能的和与i的值比较
3.如果i得值大就从i开始重新开始子序串，否则就以前面最大可能和i的值为最大，
在记录进数组，同时更新max
4.最后返回max
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const memo = []
    memo[0] = nums[0]
    let max = nums[0]
    for(let i=1;i<nums.length;i++){
        memo[i] = Math.max(memo[i-1]+nums[i],nums[i])
        max = Math.max(max,memo[i])
    }
    return max
};