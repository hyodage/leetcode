// https://leetcode-cn.com/problems/valid-palindrome/
/* 
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
*/
/* 
思路：
1.首先需要判空，因为空字符串也是回文，所以如果为空直接返回 true；
2.然后是需要将字符串不区分大小写，所以需要全部转成小写或者大小；
3.把得到的字符串转成数组，然后过滤出字母和数字；
4.最后遍历新数组，使用双指针获取头尾字符判断是否相等，不相等直接返回 false，否则遍历结束则表明它是回文串；
5.需要注意的是：遍历的时候结束条件是 left < right，这样会比 left <= right 减少一次比较。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (!s) return true
    let arr = [...s.toLowerCase()].filter(item => 'a' <= item && item <= 'z' || '0' <= item && item <= '9')
    let left = 0, right = arr.length - 1
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }
    return true
};
