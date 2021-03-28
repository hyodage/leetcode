// https://leetcode-cn.com/problems/climbing-stairs/
/* 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。
*/
/* 
思路：
1.台阶每次是可以爬一个或两个，那么用f(n)表示第n台阶第方案
那么n下面两个的方案是 f(n-1)和f(n−2)
从这两个可以到达n台阶，那么可以得出下面的状态转移公式
2.f(n)=f(n−1)+f(n−2)
*/
var climbStairs = function(n) {
    let memo = []
    memo[1] = 1
    memo[2] = 2
    for(let i=3;i<=n;i++){
        memo[i] = memo[i-1]+memo[i-2]
    }
    return memo[n]
};