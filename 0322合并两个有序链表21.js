// https://leetcode-cn.com/problems/merge-two-sorted-lists/
/* 
将两个升序链表合并为一个新的 升序 链表并返回。
新链表是通过拼接给定的两个链表的所有节点组成的。 
*/
/* 
思路：
1.创建一个空节点，在有一个变量指向这个节点，做最后返回使用
2.循环两个链表不为空的链表，如果值小就添加到curr，节点向后移，同时curr的节点也向后移动
3.如果有一个为空了，就把非空的链表部分拼接到curr
4.最后返回标记节点的next
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let curr = new ListNode()
    let dummy = curr
    while(l1 && l2){
        if(l1.val<l2.val){
            curr.next = l1
            l1 = l1.next
        }else{
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    curr.next = l1?l1:l2
    return dummy.next
};