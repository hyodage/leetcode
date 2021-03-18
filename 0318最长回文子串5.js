// https://leetcode-cn.com/problems/longest-palindromic-substring/submissions/
/* 
给你一个字符串 s，找到 s 中最长的回文子串。
*/
/* 
思路：
1.中心扩散思想，但是有两种情况cabac和cabbac都是回文子串
2.如果字符串长度小于2，直接返回原字符串
3.定义两个变量，一个start存储当前找到的最大回文字符串的起始位置，maxLength记录长度，终止位置就是start+maxLength
4.创建一个函数帮助判断，减少代码，判断左右两边是否越界，同时最左边的字符是否等于最右边的字符
5.如果以上3个条件都满足，则判断是否需要更新回文字符串最大长度和起始位置，然后left--，right++，直到不满足三个条件为止
6.遍历字符串，每个位置都调用两遍function，第一遍检查i-1，i+1，第二遍检查i，i+1
7.返回截取到的字符串
*/
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s.length<2) return s
    let start=0
    let maxLength = 1
    function expandAroundCenter(left,right){
        while(left>=0&&right<=s.length&&s[left]===s[right]){
            if(right-left+1>maxLength){
                maxLength = right-left +1
                start = left
            }
            left--
            right++
        }
    }
    for(let i=0;i<s.length;i++){
        expandAroundCenter(i-1,i+1)
        expandAroundCenter(i,i+1)
    }
    return s.substring(start,start+maxLength)
};