// https://leetcode-cn.com/problems/valid-anagram/
/* 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
*/
/* 
思路：
1.判断两个字符串的长度是否一致，不一致返回false
2.将两个字符串同时遍历，出现一个字母就添加到map
3.一个出现一次就+1，另一个出现一次就-1
4.遍历完成后检查map里是否有非0的情况
5.如果有非0说明了这两个不是字母异位词
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length!==t.length) return false
    let map = new Map()
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])){
            map.set(s[i],1)
        }else{
            map.set(s[i],map.get(s[i])+1)
        }

        if(!map.has(t[i])){
            map.set(t[i],-1)
        }else{
            map.set(t[i],map.get(t[i])-1)
        }
    }
    for (let value of map.values()) {
        if(value!==0){
            return false
        }
    }
    return true
};
