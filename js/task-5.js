let input = prompt("Input your country");
let country;
if (!input) {
  alert(`Отменено пользователем`);
}
else {
  country = input.toLowerCase();
}
let credits = 0;

switch(country) {
  case 'китай': {
    credits = 100;
    break;
  }
  case 'чили': {
    credits = 250;
    break;
  }
  case 'австралия': {
    credits = 170;
    break;
  }
  case 'индия': {
    credits = 80;
    break;
  }
  case 'ямайка': {
    credits = 120;
    break;
  }
default:
    {
    }
}
if (credits > 0) {
  alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
}
else {
  console.log(`Введите корректную информацию`);
}