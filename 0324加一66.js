// https://leetcode-cn.com/problems/plus-one/
/* 
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
*/
/* 
思路：
1.从后到前循环，如果不是9就++返回，否则就变成0，然后循环继续
2.如果有一位不是9就是返回
3.如果全部都是9，就不会返回，并且都是0，需要在前面拼接一个1
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]!==9){
            digits[i]++
            return digits
        }else{
            digits[i] = 0
        }
    }
    // 如果前面没有return，说明了现在数组全部是0
    digits = [1,...digits]
    return digits
};