// https://leetcode-cn.com/problems/linked-list-cycle/
/* 
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false 。
*/
/* 
思路：
1.两个指针执向头结点，一个跳2个节点一个跳一个节点，判断是否相交
2.注意：防止空指针异常，同时判断cur.next是否存在
*/
var hasCycle = function(head) {
    if(!head) return false
    let pre = head,cur = head
    while(cur && cur.next){
        pre = pre.next
        cur = cur.next.next
        if(pre === cur){
            return true
        }
    }
    return false
};