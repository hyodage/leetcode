// https://leetcode-cn.com/problems/3sum/
/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
*/
/* 
思路：
1.给数组排序
2.遍历数组，从0遍历到length-2（i和i+2要和最后一个相加）
3.如果数字不同，则设置start=i+1，end=length-1，查看i，start和end三个数的和比零大还是小
如果比0小，start++，如果比0大，end--
如果等于0，就把三个数加入到结果里
4.返回结果
*/
/**
 * @param {number[]} nums
 * @numsturn {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-2;i++){
        if(i===0 || nums[i]!==nums[i-1]){
            let start = i+1,end = nums.length-1
            while(start<end){
                if(nums[i]+nums[start]+nums[end]===0){
                    result.push([nums[i],nums[start],nums[end]])
                    start++
                    end--
                    while(start<end && nums[start] ===nums[start-1]){
                        start++
                    }
                    while(start<end && nums[end] ===nums[end+1]){
                        end--
                    }
                }else if(nums[i]+nums[start]+nums[end]<0){
                    start++
                }else{
                    end--
                }
            }
        }
    }
    return result
};
