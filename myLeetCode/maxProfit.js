
//мой код, он работает, но не проходит по скорости
var maxProfit = function(prices) {
    let max = 0;
  
    for (let i = 0; i < prices.length; i++) {
      for (let c = i+1; c < prices.length; c++) {
        if (prices[c] > prices[i] && (prices[c] - prices[i]) > max) {
            max = prices[c] - prices[i];
        }
      }
    }
    return max;
  };

  // не мой код, тоже работает, но проходит по скорости..
  
  var maxProfit = function(prices) {
    if(prices.length < 2) {
          return 0;
      }
      let maxProfit = 0;
      let maxStock = Math.max(prices[prices.length - 1], prices[prices.length - 2]);
      for(let i = prices.length - 2; i > -1; i--) {
          let profit = maxStock - prices[i];
          maxStock = Math.max(maxStock, prices[i]);
          maxProfit = Math.max(profit, maxProfit);
      }
      return maxProfit;
  };
  
  // как и в задании maxSubArray нужно разобраться кака это работает.