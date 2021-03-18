// https://leetcode-cn.com/problems/valid-parentheses/
/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
*/
/* 
思路：
1.利用栈先进后出的思想
2.首先创建一个map，key为'(','{','[',值为其对应的右半边，和一个空数组stack用来模拟栈
3.循环字符串，如果是map的key就把其对应的值push到stack，如果不是将stack最后一个弹出与该值比较
4.如果不相等就返回false，相等就继续
5.最后查看数组的长度，如果大于0就false说明没有闭合
*/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let map = new Map()
    map.set('[',']')
    map.set('{','}')
    map.set('(',')')
    let stack = []
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            stack.push(map.get(s[i]))
        }else{
            if(stack.pop()!==s[i]){
                return false
            }
        }
    }
    return stack.length<1
};
