// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
/* 
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
*/
/* 
思路：
1.n1 = p.next
2.n2 = p.next.next
3.p.next = n2
4.n1.next = n2.next
5.n2.next = n1
6.p = n1
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let current = dummy
    while(current.next !==null && current.next.next !==null){
        let n1 = current.next
        let n2 = current.next.next
        current.next = n2
        n1.next = n2.next
        n2.next = n1
        current = n1
    }
    return dummy.next
};