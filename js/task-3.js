const ADMIN_PASSWORD = 'q';
let message;

let input = prompt('Введите пароль');
if (input === null) {
  message = "Отменено пользователем";
}
else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать";
}
else {
  message = "Доступ запрещен, неверный пароль!";
}
  alert(message);
