// https://leetcode-cn.com/problems/two-sum/
/* 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 
和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
你可以按任意顺序返回答案。
*/

/*
思路：
创建一个map
for循环遍历nums数组
用target-nums[i]以计算那个数能跟当前的数字相加得到target
检出map里有没有这个数，有就返回结果(map里的get到的值得value和i)，
没有就把num[i]当做key，i当做value放入map中
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const mymap = new Map()
    for(let i=0;i<nums.length;i++){
        let complete = target-nums[i]
        if(mymap.has(complete)){
            return [mymap.get(complete),i]
        }else{
            mymap.set(nums[i],i)
        }
    }
    return []
};