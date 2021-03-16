// https://leetcode-cn.com/problems/add-two-numbers/
/* 
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/
/* 
思路：
创建dummy节点，然后重赋值为curr
两个节点有一个不为空时，如果某链表不为null就把节点值累加到sum，
并且各自的指针跳到下一位，sum+carry，carry是进位的值
curr.next就为sum除10的余数
除10获取10位的值赋给carry
curr的指针跳到下一位，继续循环
跳出循环判断如果carry的值大于0，就把carry的值给curr.next
最后返回dummy.next;
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode()
    let curr = dummy
    let carry = 0
    while(l1 !== null || l2 !==null){
        let sum = 0
        if(l1!==null){
            sum+=l1.val
            l1 = l1.next
        }
        if(l2 !==null){
            sum +=l2.val
            l2 = l2.next
        }
        sum +=carry
        curr.next = new ListNode(sum%10)
        carry = Math.floor(sum/10)
        curr = curr.next
    }
    if(carry>0){
        curr.next = new ListNode(carry)
    }
    return dummy.next
};