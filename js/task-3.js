const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let input = prompt('Введите пароль');
if (!input) {
  message = "Отменено пользователем";
}
else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать";
}
else if (input !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
}
  alert(message);
