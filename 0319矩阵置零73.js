// https://leetcode-cn.com/problems/set-matrix-zeroes/
/* 
给定一个 m x n 的矩阵，如果一个元素为 0，
则将其所在行和列的所有元素都设为 0。请使用原地算法。
*/
/* 
思路：
1.检查并标记第一行和第一列是否有0(firstRowHasZero，firstColHasZero)
2.使用和第一列来标记其余行列是否含有0
3.利用第一行和第一列得标0情况，将matrix中得数字标0
4.处理第一行和第一列，为true就全0
5.返回matrix
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let firstColHasZero = false//列
    let firstRowHasZero = false//行
    // 判断第一行有0的情况
    for(let i=0;i<matrix[0].length;i++){
        if(matrix[0][i]===0){
            firstRowHasZero = true
            break
        }
    }
    // 判断第一列有0的情况
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][0]===0){
            firstColHasZero = true
            break
        }
    }
    // 循环数组,标记0
    for(let row=1;row<matrix.length;row++){
        for(let col=1;col<matrix[0].length;col++){
            if(matrix[row][col] === 0){
                matrix[row][0] =0
                matrix[0][col] =0
            }
        }
    }
    // 根据标0设置其行其列为0
    for(let row=1;row<matrix.length;row++){
        for(let col=1;col<matrix[0].length;col++){
            if(matrix[0][col] ===0 || matrix[row][0]===0){
                matrix[row][col] = 0
            }
        }
    }
    // 处理第一列原本的0
    if(firstColHasZero){
         for(let i=0;i<matrix.length;i++){
            matrix[i][0]=0
        }
    }
    // 处理第一行原本的0
    if(firstRowHasZero){
         for(let i=0;i<matrix[0].length;i++){
            matrix[0][i]=0
        }
    }
    return matrix
};