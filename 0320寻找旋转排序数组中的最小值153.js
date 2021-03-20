// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
/* 
假设按照升序排序的数组在预先未知的某个点上进行了旋转。例如，数组 
[0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 。
请找出其中最小的元素。
*/
/* 
思路：
1.数组长度为1返回唯一一个数
2.定义两个指针，第一个left指向数组开头，第二个right指向数组结尾
3.当left小于right时取中间作为mid进行二分搜索，
如果mid的左边一个数大于mid
或者mid的右边一个数小于mid，返回mid
4.否则，如果left所在的数小于mid，则将left右移到mid+1，反之
如示例：[2,3,4,5,6,7,0],[7,1,2,3,4,5,6]
5.最后返回数组的第一个值，防止没有旋转的情况
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    if(nums.length ===1) return nums[0]
    let left = 0
    let right = nums.length-1
    while(left<right){
        let mid = Math.floor(left + (right-left)/2)
        if(nums[mid]>nums[mid+1]){
            return nums[mid+1]
        }
        if(nums[mid]<nums[mid-1]){
            return nums[mid]
        }
        if(nums[mid]>nums[left]){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return nums[0]
};