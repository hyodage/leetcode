//https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/* 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。 */
/* 
思路：
sliding window
1.创建两个指针
2.第一个指向字符型的开头-j，第二个随着for循环遍历字符串-i
3.如果set里没有s[i],说明到目前位置还没有重复的字符，把s[i]添加到set里
然后更新最大不重复字符串的数量
4.如果set里有s[i],则从set里开始删除s[j],并且递增j，在检出set里是否有s[i]
如此反复直到set里没有s[i]为止
重复3和4直到遍历玩整个字符串然后返回maxlength
*/