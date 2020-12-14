let credits = 23580;
const PricePerDroid = 3000;
let totalPrice;
let input = Number(prompt("How many Droid do you want to buy?"));
if (!input) {
  console.log("Отменено пользователем");
}
else if (input >= 1) { 
  totalPrice = PricePerDroid * input;
  console.log(`Сумма заказа: ${totalPrice}`);
}
else if (input < 0) {
  console.log(`Вы не можете купить отрицательное количество товара`);
}
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
}
else if (input >= 1 && totalPrice < credits) {
  credits -= totalPrice;
  console.log(`Вы купили ${input} дроидов, на счету осталось ${credits} кредитов`);
}
