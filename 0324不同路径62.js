// https://leetcode-cn.com/problems/unique-paths/
/* 
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？
*/
/* 
思路：
1.某个位置的路径 = 该位置左边位置的路径+该位置上边位置的路径
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const memo = Array(m).fill([])//生成[[],[],...]
    memo[0] = Array(n).fill(1)
    for(let i=0;i<m;i++){
        memo[i][0] = 1
    }
    //以上用于初始化记忆数组
    for(let i = 1;i<m;i++){
        for(let j=1;j<n;j++){
            memo[i][j] = memo[i-1][j]+memo[i][j-1]
        }
    }  
    return memo[m-1][n-1]  
};