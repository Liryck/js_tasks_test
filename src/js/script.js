//Завдання 1: Напишіть клас User, який має властивості name, email та password. Додайте метод, який валідує дані користувача та повертає true, якщо дані валідні, та false, якщо ні.
class User {
	constructor (name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	validateUserData() {
		if (!/^[a-zA-Z]+$/.test(this.name) || this.name.length > 50) {
			return false;
		  }
		if (!this.email.includes("@")) {
			return false;
		}
		if (
			!(
			  /[0-9]/.test(this.password) &&
			  /[a-z]/.test(this.password) &&
			  /[A-Z]/.test(this.password) &&
			  this.password.length >= 8
			)
		) {
			return false;
		}
		return true;
	}
}

//Завдання 2: Напишіть функцію, яка проводить валідацію HTML-форми та запобігає її відправці, якщо дані не валідні. Форма має поля для введення імені, email та пароля. Ви можете використовувати будь-яку функцію валідації за своєю вибором.
function validateForm(event) {
	const form = document.getElementById("myForm");
	const nameInput = form.elements["name"];
	const emailInput = form.elements["email"];
	const passwordInput = form.elements["password"];
	const user = new User(nameInput.value, emailInput.value, passwordInput.value);
	const isValid = user.validateUserData();
  
	if (!isValid) {
	  event.preventDefault();
	  alert("Дані, введені у форму, не валідні. Будь ласка, перевірте правильність введених даних та спробуйте ще раз."); 
	}
}
  
  const form = document.getElementById("myForm");
  form.addEventListener("submit", validateForm);
  
//Завдання 3: Дано форму з полем введення URL та кнопкою для відправки запиту. Напишіть функцію, яка використовує fetch API для виконання GET запиту та отримання відповіді від сервера. Функція має відправляти запит при натисканні на кнопку та відображати результат запиту на сторінці.

// Не працював з API

// Завдання 4: Є функція, яка приймає на вхід масив чисел та повертає суму всіх парних чисел в масиві. Якщо масив не містить жодного парного числа, функція повертає 0. Знайдіть помилку в даному прикладі.

function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// Приклад виклику:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([1, 3, 5])); // 0
console.log(sumEvenNumbers([2, 4, 6])); // 12

// Помилки немає!


// Завдання 5: Дано масив об'єктів, що представляє список користувачів:

const users = [
  {id: 1, name: "John Doe", age: 25},
  {id: 2, name: "Jane Smith", age: 30},
  {id: 3, name: "Bob Johnson", age: 35},
  {id: 4, name: "Alice Brown", age: 20}
];

// Напишіть функції для виконання наступних операцій:

// Операція 5.1: Повернути список імен користувачів, відсортований за зростанням віку
function getUsersSortedByAge(users) {
	const sortedUsers = users.sort((a, b) => a.age - b.age);
	const sortedUserNames = sortedUsers.map(user => user.name);
	return sortedUserNames;
}

// Операція 5.2: Повернути список об'єктів, які містять ім'я та вік кожного користувача, котрий старше 25 років:
function getUsersOver25(users) {
	const usersOver25 = users.filter(user => user.age > 25);
	const usersOver25WithNamesAndAges = usersOver25.map(user => {
	  return { name: user.name, age: user.age };
	});
	return usersOver25WithNamesAndAges;
}

// Операція 5.3: Повернути об'єкт зі статистикою кількості користувачів, кожного віку
function getUsersAgeStats(users) {
	const stats = {};
	for (let i = 0; i < users.length; i++) {
	  const age = users[i].age;
	  if (stats[age]) {
		stats[age]++;
	  } else {
		stats[age] = 1;
	  }
	}
	return stats;
}
  
console.log(getUsersAgeStats(users));