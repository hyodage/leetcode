// https://leetcode-cn.com/problems/spiral-matrix/
/* 
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
*/
/* 
思路：
1.数组为空返回空
2.定义4个边界及当前方向，接收结果的数组
3.当左边界小于等于右边界，且上边界小于等于下边界时，执行while循环
安装右下左上的顺序，依次将路径上的字符添加到结果里
4.循环结束返回结果
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    if(matrix.length ===0) return []
    let top = 0
    let left = 0
    let bottom = matrix.length-1
    let right = matrix[0].length-1
    let direction = 'right'
    let result = []
    while(top<=bottom&&left<=right){
        if(direction ==='right'){
            for(let i=left;i<=right;i++){
                result.push(matrix[top][i])
            }
            top++
            direction = 'down'
        }else if(direction ==='down'){
            for(let i=top;i<=bottom;i++){
                result.push(matrix[i][right])
            }
            right--
            direction = 'left'
        }else if(direction ==='left'){
            for(let i=right;i>=left;i--){
                result.push(matrix[bottom][i])
            }
            bottom--
            direction = 'up'
        }else if(direction ==='up'){
            for(let i=bottom;i>=top;i--){
                result.push(matrix[i][left])
            }
            left++
            direction = 'right'
        }
    }
    return result
};