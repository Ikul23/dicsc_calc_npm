const { discountCashFlowsCalculation } = require('./index');

const cashflows = [-2000, 1000, 1200, 1500]; 
const wacc = 0.35; 

const npv = discountCashFlowsCalculation(cashflows, wacc);
console.log("NPV:", npv.toFixed(2));
