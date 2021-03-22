// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
/* 
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
进阶：你能尝试使用一趟扫描实现吗？
给定的n是有效的
*/
/* 
思路：
1.删除第n个那么可以设置两个指针一起往后走，两个指针的间距就位n
2.当指针到达最后一个节点时，就停止，那么后面的指针就停在了要删除节点的前一个位置
3.删除某个节点，需要把该节点的前一个节点指向该节点的后一个节点
4.dummy指向head，最后返回dummy.next
5.（考虑只有一个节点的情况）
*/
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next =head
    let n1 = dummy
    let n2 = dummy
    for(let i=0;i<n;i++){
        n2 = n2.next
    }
    if(n2 ===null) return null
    while(n2.next !== null){
        n1 = n1.next
        n2 = n2.next
    }
    n1.next = n1.next.next
    return dummy.next
};