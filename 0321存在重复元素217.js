// https://leetcode-cn.com/problems/contains-duplicate/
/* 
给定一个整数数组，判断是否存在重复元素。
如果存在一值在数组中出现至少两次，函数返回 true 。
如果数组中每个元素都不相同，则返回 false 。
*/
/* 
思路：
1.判断是否存在于set，存在返回true，不存在就继续添加
2.最后返回false
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    return false
};
