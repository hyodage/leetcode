// https://leetcode-cn.com/problems/jump-game/
/* 
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。(可跳该值区间任意值)
判断你是否能够到达最后一个下标。
*/
/* 
思路：topdown
1.创建一个记录数组
2.迭代，举例[2,3,1,1,4]，如果下标3能到4就标记1，下标2
3.
4.
5.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    // 创建一个记录数组
    let totalLength = nums.length;
    let memo = Array(totalLength).fill(0)
    memo[totalLength-1] = 1
    function dump(position){
        if(memo[position]===1){
            return true
        }else if(memo[position]===-1){
            return false
        }
        const maxJump = Math.min(position+nums[position],totalLength-1)
        for(let i=position+1;i<=maxJump;i++){
            const jumpResult = dump(i)
            if(jumpResult===true){
                memo[position] = 1
                return true
            }
        }
        memo[position]=-1
        return false
    }
    let result = dump(0)
    return result
};