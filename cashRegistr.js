function checkCashRegister(price, cash, cid) {
  let output = { status: null, change: [] };
  let change = cash - price;
  cid = cid.reverse();
  let sum = 0
  let arr = [];
  const amount = [['One hundred', 100],['Twenty', 20], ['Ten', 20], ['Five', 5], ['One', 1], ["Quarter", 0.25], ['Dime', 0.1], ['Nickel', 0.05],['Penny', 0.01]];
  for(let i = 0; i < amount.length; i++) {
    sum = 0;
    let count = 0;
    while(change >= amount[i][1]) {
      if(cid[i][1] === 0) {
        break;
      }
      change -= amount[i][1];
      sum += amount[i][1];
      cid[i][1] -= amount[i][1];
      count++;
      if(count === cid[i][1]/amount[i][1]) {
        break;
      }
      if(change < 0.01 && change > 0) {
        sum += amount[i][1];
        sum = parseFloat(sum.toFixed(2));
        cid[i][1] = parseFloat(cid[i][1].toFixed(2));
        cid[i][1] -= amount[i][1];
        change = change.toFixed(2);
        change -= amount[i][1];
      }
    }
    
      arr.push([amount[i][0].toUpperCase(),sum])
  }


  if(change === 0) {
    cid = cid.filter((item) => item[1] !== 0)
    if(cid.length === 0) {
      arr = arr.reverse();
      output.status = "CLOSED"
      output.change = arr
      return output
    }
    arr = arr.filter((item) => item[1] !== 0)
    output.status = "OPEN"
    output.change = arr
    return output;
  }
  output.status = "INSUFFICIENT_FUNDS"
  return output
}