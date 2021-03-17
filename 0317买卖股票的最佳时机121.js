// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
/* 
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
*/
/* 
思路：
1.每个点最大利润需要选择前面最小的价格点
2.选出1中所有价格差中最大的值
3.遍历数组，将当前价格与最小价格比较，
4.如果小于最小价格就赋给最小价格，说明了处于下跌趋势。
5.否则，如果当前价格与最小价格的差大于最大利益，就把差值赋值给最大利益
6.返回最大利益
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.length<=1) return 0
    let minPrice = prices[0]
    let maxProfit = 0
    for(let i=1;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i]
        }else if(prices[i]-minPrice>maxProfit){
            maxProfit = prices[i]-minPrice
        }
    }
    return maxProfit
};