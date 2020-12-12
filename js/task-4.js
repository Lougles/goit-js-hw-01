let credits = 23580;
let PricePerDroid = 3000;
let totalPrice;
let input = prompt("How many Droid do you want to buy?");
if (input === null) {
  console.log("Отменено пользователем");
}
else if (input < 0) {
  console.log(`Вы не можете купить отрицательное количество товара`);
  input = 0;
}
else {
  totalPrice = PricePerDroid * input;
  console.log(`Сумма заказа: ${totalPrice}`);
}
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
}
else {
  credits = credits - totalPrice;
  console.log(`Вы купили ${input} дроидов, на счету осталось ${credits} кредитов`);
}