// https://leetcode-cn.com/problems/binary-search/

/* 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1 */

/* 
思路：
left=0，right=length-1
mid = left + (right-left)/2
当left<=right
如果mid的值等于target，返回mid
如果mid小于target，left=mid+1
如果mid大于target，right=mid-1
循环结束没有target，返回-1
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    while(left<=right){
        let mid = Math.floor(left + (right-left)/2)
        if(nums[mid] == target){
            return mid
        }else if(nums[mid]>target){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    return -1
};