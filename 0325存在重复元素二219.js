// https://leetcode-cn.com/problems/contains-duplicate-ii/
/* 
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，
使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k
*/
/* 
思路：
1.不同于存在重复元素1使用set来判断是否存在，加了条件后就需要使用map
2.可以循环数组，将值作为key，索引作为value存到map
3.判断map是否存在该值，并且索引的差小于等于k
4.如果判断成功就返回true，否则添加直到循环完毕
5.最后返回false
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i]) && (i-map.get(nums[i]))<=k){
            return true
        }else{
            map.set(nums[i],i)
        }
    }
    return false
};