// https://leetcode-cn.com/problems/group-anagrams/submissions/
/* 
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
*/
/* 
思路：
1.检查是否为空数组
2.循环数组，遍历字符串，将字母出现的频率放到数组
（创建一个长度为26每个位置为0）对应位置里（利用ascii）
3.将数组拼接为字符串，利用map进行归类，key为字符串，值为数组
4.遍历map，将结果返回
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function (strs) {
    if (strs.length === 0) return []
    const map = new Map()
    for (const str of strs) {
        //创建26长度都为0的数组
        const characters = Array(26).fill(0)
        //将对应位置的值++记录
        for (let i = 0; i < str.length; i++) {
            const ascii = str[i].charCodeAt() - 97
            characters[ascii]++
        }
        //数组转字符串
        const key = characters.join("|")
        //保存到map
        if (map.has(key)) {
            map.set(key, [...map.get(key), str])
        } else {
            map.set(key, [str])
        }
    }
    const result = []
    for (const arr of map) {
        result.push(arr[1])
    }
    return result
};
