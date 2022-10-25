// tip = 15%

//  if(50 < bill < 300)   ----> tip = 15%

//  else ---> tip = 20%
// const bill_1 = 275;
// const bill_2 = 40;
// const bill_3 = 430;

// const tip_ratio_1 = 15 / 100;
// const tip_ratio_2 = 20 / 100;

// const tip_1 = 50 < bill_1 < 300 ? bill_1 * tip_ratio_1 : bill_1 * tip_ratio_2;
// const tip_2 = 50 < bill_2 < 300 ? bill_2 * tip_ratio_1 : bill_2 * tip_ratio_2;
// const tip_3 = 50 < bill_3 < 300 ? bill_3 * tip_ratio_1 : bill_3 * tip_ratio_2;

// ? --------> IF
// : --------> ELSE
// let total_value_1;
// console.log(
//   `The bill was ${bill_1}, the tip was ${
//     50 < bill_1 < 300 ? bill_1 * tip_ratio_1 : bill_1 * tip_ratio_2
//   }, and the total value ${
//     bill_1 + (50 < bill_1 < 300 ? bill_1 * tip_ratio_1 : bill_1 * tip_ratio_2)
//   }`
// );

// let total_value_1;
// console.log(
//   `The bill was ${bill_1}, the tip was ${tip_1}, and the total value ${
//     bill_1 + tip_1
//   }`
// );
const bill = 40;
const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
let recap;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

// let total_value_2;
// console.log(
//   `Total value is ${
//     50 < bill_2 < 300 ? bill_2 * tip_ratio_1 : bill_2 * tip_ratio_2
//   }`
// );
