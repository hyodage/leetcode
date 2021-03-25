// https://leetcode-cn.com/problems/intersection-of-two-arrays/
/* 
给定两个数组，编写一个函数来计算它们的交集。
*/
/* 
思路：
1.循环nums1，判断如果nums[i]出现在了nums里面就把的add到set，
include相当于也循环了一遍nums2，整体复杂度就变成了n^2
2.最后把set转数组输出
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const result = new Set()
    for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            result.add(nums1[i])
        }
    }
    return [...result]
};
/* 优化 */
/* 
数组搜索值，复杂度O(n)
Set Map - .has复杂度O(1)
*/
 var intersection = function(nums1, nums2) {
    const result = new Set()
    const num = new Set(nums2)
    for(let i=0;i<nums1.length;i++){
        if(num.has(nums1[i])){
            result.add(nums1[i])
        }
    }
    return [...result]
};