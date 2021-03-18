// https://leetcode-cn.com/problems/merge-intervals/
/* 
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
*/
/* 
思路：
1.如果长度小于2原样返回
2.根据每一个区间的第一个值进行由低到高排序
3.初始化一个现在的区间intervals[0]，循环intervals，
4.如果curr的1大于等于interval的0,说明了前一个区间和后一个区间有交集，把最大区间保留下来继续循环
4.否则没有交集，把curr push到result，更新curr为interval
5.不论最后的结果有没有交集，都应该把curr再次push到result，然后返回
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
    if (intervals.length < 2) return intervals
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let curr = intervals[0]
    let result = []
    for (let interval of intervals) {
        if (curr[1] >= interval[0]) {
            curr[1] = Math.max(curr[1], interval[1])
        } else {
            result.push(curr)
            curr = interval
        }
    }
    result.push(curr)
    return result
};