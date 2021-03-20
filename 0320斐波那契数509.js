// https://leetcode-cn.com/problems/fibonacci-number/
/* 
斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。
该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
*/
/* 
思路：
1.动态规划：递归+记忆化
*/
// 方法一：将所有数据都存在一个数组
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n<=1) return n
    let cache = [0,1]
    for(let i=2;i<=n;i++){
        cache[i] = cache[i-1]+cache[i-2]
    }
    return cache[n]
};
// 方法二：仅用两个变量记忆前两个值，降维
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n<=1) return n
    let prev2 = 0
    let prev1 = 1
    let result = 0
    for(let i=2;i<=n;i++){
        result = prev2+prev1
        prev2 = prev1
        prev1 = result
    }
    return result
};
