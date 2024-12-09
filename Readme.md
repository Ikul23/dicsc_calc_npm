# Дисконтирование денежных потоков

Этот пакет рассчитывает чистую приведенную стоимость (NPV) денежных потоков с использованием ставки дисконтирования.

# Discount Cashflows

This package calculates the Net Present Value (NPV) of cashflows using a discount rate.

## Installation

```bash
npm install discount-cashflows
```

- Функция расчета дисконтированных денежных потоков (NPV)
- @param {number[]} cashflows - Массив денежных потоков (включая инвестиции t=0)
- @param {number} wacc - Ставка дисконтирования
- @returns {number} - Чистая приведенная стоимость (NPV)

- Discounted cash flow (NPV) calculation function
- @param {number[]} cashflows - Array of cash flows (including investments t=0)
- @param {number} wacc - Discount rate
- @returns {number} - Net Present Value (NPV)
