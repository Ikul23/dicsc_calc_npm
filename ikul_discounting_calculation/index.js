const Decimal = require('decimal.js');


function discountCashFlowsCalculation(cashflows, wacc) {
  if (!Array.isArray(cashflows) || typeof wacc !== "number") {
    throw new Error("Неверные входные данные. cashflows должен быть массивом, а wacc — числом.");
  }

  const discountRate = new Decimal(1).plus(wacc);

  const npv = cashflows.reduce((sum, cashflow, period) => {
    const discountedCashflow = new Decimal(cashflow).div(discountRate.pow(period)); 
    return sum.plus(discountedCashflow); 
  }, new Decimal(0));

  return npv.toNumber();
}

module.exports = { discountCashFlowsCalculation };
