// // ===== Рандомне число =====
// let max = prompt('Write max number');
// max = Number(max);
// console.log('Max number', max);

// let min = prompt('Write min number');
// min = Number(min);
// console.log('Min number', min);

// // parseInt;????????
// let rundomNumber = Math.round(Math.random() * (max - min) + min);
// console.log('Rundom number', rundomNumber);

// --------------------------------------------------------------

// ===== Приклад роботи SWITCH =====
// const option = 5;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Ви можете забрати товар в нашому офісі';
//     break;

//   case 2:
//     message = 'Посилка буде відправлена сьогодні';
//     break;

//   case 3:
//     message = 'Посилка буде відправлена сьогодні';
//     break;

//   default:
//     message = 'Вам зателефонує менеджер';
// }

// console.log(message);

// --------------------------------------------------------------

// ===== Приклад роботи FOR =====
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log('Стоп');

// --------------------------------------------------------------

// ===== Приклад роботи роботи замикання функції =====
// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('котлети');
// mango('борщ');

// --------------------------------------------------------------

// ===== Створення скрипта управління особистим кабінетом інтернет банку =====

// /*Є об'єкт account в якому необхідно реалізувати методи для роботи
// з балансом та історією транзакцій.

// !!!Кожна транзакція - це об'єкт із властивостями: id, type, amount
// */

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// Object.freeze(Transaction); //заблокували можливість внесення змін до методу

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /**
//    * Метод  createTransaction, який створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції: amount, type
//    */
//   createTransaction(amount, type) {
//     return {
//       id: Date.now(), //створюємо по теперішньому часу
//       type,
//       amount,
//     };
//   },

//   /*
//    * Метод deposit, який відповідає за додавання суми до балансу.
//    * Приймає суму транзакції: amount
//    * Викликає метод createTransaction для створення об'єкта транзакції,
//    * після чого додає його до історії транзакцій.
//    */
//   deposit(amount) {
//     if (amount <= 0) {
//       return 'Error';
//     }
//     const item = this.createTransaction(amount, Transaction.DEPOSIT); //змінна отримує результат виконання методу createTransaction
//     this.balance += amount;
//     this.transactions.push(item);
//   },

//   /*
//    * Метод withdraw, який відповідає за зняття суми з балансу.
//    * Приймає суму транзакції: amount.
//    * Викликає метод createTransaction для створення об'єкта транзакції,
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance || amount <= 0) {
//       return 'недостатньо коштів';
//     }
//     const item = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.balance -= amount;
//     this.transactions.push(item);
//   },

//   /*
//    * Метод, який повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод, який шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return 'Empty';
//   },

//   /*
//    * Метод, який повертає кількість коштів певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }

//     return sum;
//   },
// };

// account.deposit(100); //додали на депозит 100
// account.deposit(400); //додали на депозит 400
// account.deposit(1000); //додали на депозит 1000
// account.withdraw(700); //зняли з депозиту 700
// account.withdraw(500); //зняли з депозиту 500
// console.log(`На депозит покладено: ${account.getTransactionTotal(Transaction.DEPOSIT)}`); //отримали загальну суму покладених коштів
// console.log(`З депозиту знято: ${account.getTransactionTotal(Transaction.WITHDRAW)}`); //отримали загальну суму знятих коштів
// console.log(`На депозиті залишилося: ${account.balance}`); //отримали залишок на балансі
// console.log(account); //отримали стан рахунку

// --------------------------------------------------------------

// ===== Підрахунок карт =====
// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
//   count = 0; //у freeCodeCamp не має бути

//   for (const argument of arguments) {
//     if (argument >= 2 && argument <= 6) {
//       count += 1;
//     } else if (argument >= 7 && argument <= 9) {
//       count += 0;
//     } else {
//       count -= 1;
//     }
//   }

//   return count > 0 ? `${count} Bet` : `${count} Hold`;

//   // Змініть код лише над цим рядком
// }

// console.log(cc(2, 3, 4, 5, 6));
// console.log(cc(7, 8, 9));
// console.log(cc(10, 'J', 'Q', 'K', 'A'));
// console.log(cc(3, 7, 'Q', 8, 'A'));
// console.log(cc(2, 'J', 9, 2, 7));
// console.log(cc(2, 2, 10));
// console.log(cc(3, 2, 'A', 10, 'K'));

// --------------------------------------------------------------

// ===== Завдання 41 автоперевірки модуля 3 =====
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];

//       if (name === potionName) {
//         potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];

//       if (name === oldName) {
//         potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'),
// );

// --------------------------------------------------------------

// ===== Пошук профілю =====
// /*
// Є масив об'єктів, які представляють різних людей зі списку контактів.
// Функція lookUpProfile приймає name та властивість (prop) як аргументи.
// Функція повинна перевірити, чи name дійсно є ім’ям (firstName) контакту і надана властивість (prop) є властивістю цього контакту.
// Якщо обидва є істинними, то поверніть значення цієї власності.
// Якщо name не відповідає жодному контакту, поверніть рядок No such contact.
// Якщо prop не збігається з жодною дійсною властивістю контакту, що відповідає name, поверніть рядок No such property.
// */

// const contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Змініть код лише під цим рядком
//   for (const contact of contacts) {
//     if (contact.firstName === name && contact[prop] !== undefined) {
//       return contact[prop];
//     } else if (contact.firstName === name && contact[prop] === undefined) {
//       return 'No such property';
//     }
//   }

//   for (const contact of contacts) {
//     if (contact.firstName !== name) {
//       return 'No such contact';
//     }
//   }
//   // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile('Akira', 'likes'));
// console.log(lookUpProfile('Kristian', 'lastName'));
// console.log(lookUpProfile('Sherlock', 'likes'));
// console.log(lookUpProfile('Harry', 'likes'));
// console.log(lookUpProfile('Bob', 'number'));
// console.log(lookUpProfile('Bob', 'potato'));
// console.log(lookUpProfile('Akira', 'address'));

// --------------------------------------------------------------

// ===== Завдання 20 автоперевірки модуля 4 =====
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// //складання масиву усіх жанрів
// const allGenres = books.flatMap(book => book.genres);
// //складання масиву унікальних жанрів
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

// --------------------------------------------------------------

// // ===== Завдання 48 автоперевірки модуля 4 =====
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .map(user => user.balance)
//     .reduce((total, balance) => total + balance);
// };

// console.log(getTotalBalanceByGender(users, 'male'));
// console.log(getTotalBalanceByGender(users, 'female'));

// --------------------------------------------------------------

// ===== Приклад з невірним рахуванням =====

// function add(num1, num2) {
//   //створюємо змінні для підрахунку довжини чисел
//   const firstNumber = String(num1).split('').length;
//   const secondNumber = String(num2).split('').length;

//   // створюємо змінну для невірного підрахунку
//   let errorNumber = '';

//   // за умовою різних довжин, рахуємо вірно
//   if (firstNumber !== secondNumber) {
//     return num1 + num2;
//   }

//   // за умовою однакових довжин запускаємо цикл
//   else {
//     for (let i = 0; i < firstNumber; i += 1) {
//       // String(num1).split('') - переводимо число до рядка та розбиваємо на символи
//       // [i] - на кожній ітерації беремо символ та переводимо до числа
//       //  + - додаємо числа (символи) першого (num1) та другого (num2) числа
//       // робимо конкатинацію та додаємо результат да змінної невірного підрахунку
//       errorNumber += `${Number(String(num1).split('')[i]) + Number(String(num2).split('')[i])}`;
//     }
//     return Number(errorNumber);
//   }
// }

// console.log(add(26, 39));
// console.log(add(1202, 81));

// --------------------------------------------------------------

// ===== Приклад з невірним рахуванням =====

// function add(num1, num2) {
//   const firstNumber = String(num1).length;
//   const secondNumber = String(num2).length;

//   let arr1 = String(num1).split('').reverse();
//   let arr2 = String(num2).split('').reverse();
//   let arrError = [];

//   if (firstNumber > secondNumber) {
//     for (let i = 1; i <= secondNumber; i += 1) {
//       arrError.push(Number(String(num1)[firstNumber - i]) + Number(String(num2)[secondNumber - i]));
//     }
//     return arrError.concat(arr1.slice(secondNumber)).reverse().join('');
//   } else {
//     for (let i = 1; i <= firstNumber; i += 1) {
//       arrError.push(Number(String(num1)[firstNumber - i]) + Number(String(num2)[secondNumber - i]));
//     }
//     return arrError.concat(arr2.slice(firstNumber)).reverse().join('');
//   }
// }

// console.log(add(199, 5));
// console.log(add(1205, 86));

// --------------------------------------------------------------

// ===== попередня задача =====
// function add(num1, num2) {
//   let result = '';
//   let val1 = String(num1);
//   let val2 = String(num2);

//   if (val1.length > val2.length) {
//     val2 = val2.padStart(val1.length, '0');
//   } else {
//     val1 = val1.padStart(val2.length, '0');
//   }

//   const arr1 = val1.split('');
//   const arr2 = val2.split('');

//   for (let i = 0; i < arr1.length; i += 1) {
//     const sum = Number(arr1[i]) + Number(arr2[i]);
//     result += sum;
//   }
//   return Number(result);
// }

// console.log(add(199, 5));
// console.log(add(1205, 86));

// --------------------------------------------------------------

// ===== Веселі властивості чиел =====
/**
 * Число n розкладається на масив цифр (89 => [8, 9])
 * Шукається k за формулою (a^p + b^(p+1) + c^(p+2) + d^(p+3) + ...) = n*k,
 * та повертається це k
 * Якщо таке k знайти не можливо, то повертається -1
 */
// function digPow(n, p) {
//   const sumPow = String(n)
//     .split('')
//     .reduce((acc, elem, idx) => acc + Math.pow(elem, p + idx), 0);

//   if (sumPow % n) {
//     return -1;
//   } return sumPow / n;
// }

//*************⬆️

// function digPow(n, p) {
//   var ans =
//     n
//       .toString()
//       .split('')
//       .map((v, i) => Math.pow(v, i + p))
//       .reduce((a, b) => a + b) / n;

//   return ans % 1 == 0 ? ans : -1;
// }

// console.log(digPow(89, 1));
// console.log(digPow(92, 1));
// console.log(digPow(695, 2));
// console.log(digPow(46288, 3));

// --------------------------------------------------------------

// ===== Методи з бібліотеки LODASH =====
// _.union([Array1], [Array2], ...); //формує масив унікальних елементів
// _.range([start], end, [step]); //формує масив чисел ([від], до, [крок])

// --------------------------------------------------------------

// ===== Створення калькулятора на + та * =====
/* read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
 * sum() повертає суму збережених значень.
 * mul() множить збережені значення і повертає результат.
 */

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = Number(prompt('Введіть перше число'));
//     this.b = Number(prompt('Введіть друге число'));
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// --------------------------------------------------------------

// ===== Підтвердження закінчення =====
/**
 * Перевірте, чи рядок str закінчується заданим цільовим рядком target.
 * Без використання методу .endsWith()
 */

// function confirmEnding(str, target) {
//   if (str.split(' ').length === 1) {
//     return str.slice(str.length - target.length) === target ? true : false;
//   }
//   return (
//     str.split(' ').some(word => word.slice(word.length - target.length) === target) &&
//     str.indexOf(target) === str.length - target.length
//   );

// інше рішення
// return str.slice(-target.length) === target ? true : false;
// }

// console.log(confirmEnding('Congratulation', 'on')); //true
// console.log(confirmEnding('Open sesame', 'same')); //true
// console.log(confirmEnding('Bastian', 'n')); //true
// console.log(
//   confirmEnding(
//     'Walking on water and developing software from a specification are easy if both are frozen',
//     'specification',
//   ),
// ); //false

// --------------------------------------------------------------

// ===== Скорочення рядка =====
/**
 * Скоротіть рядок (перший аргумент), якщо він довший за максимальну
 * довжину рядка (другий аргумент). Поверніть скорочений рядок із закінченням ....
 */
// function truncateString(str, num) {
//   const arrStr = str.split('');

//   if (arrStr.length > num) {
//     arrStr.splice(num);
//     return arrStr.join('') + '...';
//   }
//   return str;
// }

// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
// console.log(truncateString('A-', 1));
// console.log(
//   truncateString(
//     'A-tisket a-tasket A green and yellow basket',
//     'A-tisket a-tasket A green and yellow basket'.length,
//   ),
// );
// console.log(
//   truncateString(
//     'A-tisket a-tasket A green and yellow basket',
//     'A-tisket a-tasket A green and yellow basket'.length + 2,
//   ),
// );

// --------------------------------------------------------------

// ===== Слова з великої літери =====
// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(el => el.replace(el[0], el[0].toUpperCase()))
//     .join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase('sHoRt AnD sToUt'));

// --------------------------------------------------------------

// ===== Мутації =====
/**
 * Поверніть true, якщо рядок у першому елементі масиву містить
 * усі літери рядка у другому елементі масиву.
 */

// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split('')
//     .every(el => arr[0].toLowerCase().includes(el));
// }

// console.log(mutation(['hello', 'hey'])); //false
// console.log(mutation(['Mary', 'Army'])); //true
// console.log(mutation(['Alien', 'line'])); //true

// --------------------------------------------------------------

// ===== Сума всіх чисел в діапазоні =====

// function sumAll(arr) {
//   const sortArr = arr.sort((a, b) => a - b);
//   for (let i = sortArr[0] + 1; i < sortArr[1]; i += 1) {
//     arr.push(i);
//   }
//   return arr.reduce((sum, num) => (sum += num), 0);
// }

// console.log(sumAll([1, 4])); //10
// console.log(sumAll([10, 5])); //45

// --------------------------------------------------------------

// ===== Різниця між двома масивами =====

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   for (const el of arr1) {
//     if (!arr2.includes(el)) {
//       newArr.push(el);
//     }
//   }

//   for (const el of arr2) {
//     if (!arr1.includes(el)) {
//       newArr.push(el);
//     }
//   }

//   return newArr;
// }

// // [4]
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// // ['pink wool']
// console.log(
//   diffArray(
//     ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//     ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'],
//   ),
// );
// // ['piglet', 4]
// console.log(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]));

// --------------------------------------------------------------

// ===== Пошук та знищення =====

// Потрібно використати об'єкт arguments

// function destroyer(arr) {
//   const restArgs = Array.from(arguments);
//   restArgs.shift();

//   let result = [...arr];
//   for (const arg of restArgs) {
//     result = result.filter(element => element !== arg);
//   }
//   return result;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //[1, 1]
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //[1]
// console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53)); //['hamburger']

// --------------------------------------------------------------

// ===== Де ж ти, Ромео? =====
/**
 * Напишіть функцію, яка проглядає масив об'єктів (перший аргумент) і
 * повертає масив усіх об'єктів, які мають однакові пари імен та
 * значень (другий аргумент). Кожна пара імен та значень вихідного об'єкта
 * повинна бути в об'єкті з колекції, якщо він необхідний у повернутому масиві.
 */

// function whatIsInAName(collection, source) {
//   let result = [...collection];
//   for (const sourceKey of Object.keys(source)) {
//     for (const element of result) {
//       result = result.filter(
//         element => sourceKey in element && source[sourceKey] === element[sourceKey],
//       );
//     }
//   }
//   return result;
// }

// console.log(
//   whatIsInAName(
//     [
//       { first: 'Romeo', last: 'Montague' },
//       { first: 'Mercutio', last: null },
//       { first: 'Tybalt', last: 'Capulet' },
//     ],
//     { last: 'Capulet' },
//   ),
// ); //[{ first: "Tybalt", last: "Capulet" }]

// console.log(
//   whatIsInAName([{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }, { bat: 2 }], {
//     apple: 1,
//     bat: 2,
//   }),
// ); //[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

// --------------------------------------------------------------

// ===== Шашличний регістр =====

/**
 * Всі-слова-в-нижньому-регістрі-та-розділені-рискою
 */

// function spinalCase(str) {
//   const arrStr = str.replaceAll(' ', '-').replaceAll('_', '-').split('-');

//   const arrLowerFirstLatter = arrStr.reduce((acc, el) => {
//     acc.push(el.slice(0, 1).toLowerCase() + el.slice(1));
//     return acc;
//   }, []);

//   const newStr = arrLowerFirstLatter.join('-');

//   let result = '';
//   for (let i = 0; i < newStr.length; i += 1) {
//     if (newStr[i].match(/[A-Z]/)) {
//       result += newStr[i].replace(newStr[i], '-' + newStr[i]);
//     } else {
//       result += newStr[i];
//     }
//   }
//   return result.toLowerCase();
// }

// console.log(spinalCase('thisIsSpinalTap'));
// console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase('The_Andy_Griffith_Show'));
// console.log(spinalCase('AllThe-small Things'));
// console.log(spinalCase('Teletubbies say Eh-oh'));

// --------------------------------------------------------------

//===== Порасяча латина =====

/**
 * Якщо слово починається з приголосного звуку, то перший приголосний
 * або сполучення приголосних переміщуються в кінець слова і додається ay.
 *
 * Якщо слово починається з голосного звуку, то вкінці просто додається way.
 */

// function translatePigLatin(str) {
//   if (str[0].match(/[a,e,y,u,i,o]/)) {
//     return str + 'way';
//   } else if (str[0] === 'r') {
//     return str + 'ay';
//   } else {
//     for (let i = 0; i < str.length; i += 1) {
//       if (str[i].match(/[a,e,y,u,i,o]/)) {
//         return str.slice(i) + str.slice(0, i) + 'ay';
//       }
//     }
//   }
// }

// console.log(translatePigLatin('california')); //aliforniacay
// console.log(translatePigLatin('algorithm')); //algorithmway
// console.log(translatePigLatin('eight')); //eightway
// console.log(translatePigLatin('schwartz')); //artzschway
// // !!! помилка в тесті
// console.log(translatePigLatin('rhythm'));

// --------------------------------------------------------------

// ===== Пошук та заміна =====

/**
 * Виконати пошук та заміну на реченні, використовуючи надані
 * аргументи, та повернути нове речення.
 * Регістр першої літери має значення
 */

// function myReplace(str, before, after) {
//   return before[0].match(/[a-z]/)
//     ? str.replace(before, after.replace(after[0], after[0].toLowerCase()))
//     : str.replace(before, after.replace(after[0], after[0].toUpperCase()));
// }

// // Let us go to the mall
// console.log(myReplace('Let us go to the store', 'store', 'mall'));
// // He is Sitting on the couch
// console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));
// // I think we should look down there
// console.log(myReplace('I think we should look up there', 'up', 'Down'));

// --------------------------------------------------------------

// ===== Формування пар ДНК =====

/**
 * Є пари ланцюжків ДНК - AT та TG.
 * Слід написати фуекцію для пошуку відсутніх базових пар для наданого ланцюжка
 * та формування з найдених пар масивів.
 * Всі пари ланцюжків мають зберігатися в загальному масиві
 */

// function pairElement(str) {
//   return str.split('').reduce((acc, el) => {
//     if (el === 'G') {
//       acc.push([el, 'C']);
//     }
//     if (el === 'C') {
//       acc.push([el, 'G']);
//     }
//     if (el === 'A') {
//       acc.push([el, 'T']);
//     }
//     if (el === 'T') {
//       acc.push([el, 'A']);
//     }
//     return acc;
//   }, []);
// }

// console.log(pairElement('GCG')); //[["G", "C"], ["C","G"], ["G", "C"]]
// console.log(pairElement('ATCGA')); //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// console.log(pairElement('TTGAG')); //[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// console.log(pairElement('CTCTA')); //[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

// --------------------------------------------------------------

// ===== Пропущені літери =====

/**
 * Знайти пропущену літеру в переданому діапазоні літер та повернути її.
 * Якщо у діапазоні наявні всі літери, повернути undefined.
 */

// function fearNotLetter(str) {
//   for (let i = 0; i < str.length - 1; i += 1) {
//     if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
//       return String.fromCharCode(str.charCodeAt(i) + 1);
//     }
//   }
//   return undefined;
// }

// console.log(fearNotLetter('abce')); // d
// console.log(fearNotLetter('abcdefghjklmno')); // i
// console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')); // undefined

// --------------------------------------------------------------

// ===== Сортування масиву =====

/**
 * Напишіть функцію, яка приймає два або більше масивів та повертає новий масив унікальних значень
 * у порядку наданих початкових масивів.
 */

// function uniteUnique(arr, ...restArr) {
//   let result = arr.filter((el, idx, arr) => arr.indexOf(el) === idx);

//   for (const rest of restArr) {
//     for (const el of rest) {
//       if (!result.includes(el)) {
//         result.push(el);
//       }
//     }
//   }
//   return result;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //[1, 2, 3, 5]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //[1, 2, 3, 5, 4, 6, 7, 8]
// console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]

// --------------------------------------------------------------

// ===== Перетворення символів для HTML =====

/**
 * Перетворіть символи &, <, >, " (подвійні лапки) та ' (апостроф)
 * у відповідне позначення символів для HTML.
 */

// function convertHTML(str) {
//   let res = '';
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === '&') {
//       res += str.slice(i, i+1).replaceAll(str[i], '&amp;');
//     } else if (str[i] === '<') {
//       res += str.slice(i, i+1).replaceAll(str[i], '&lt;');
//       continue;
//     } else if (str[i] === '>') {
//       res += str.slice(i, i+1).replaceAll(str[i], '&gt;');
//       continue;
//     } else if (str[i] === '"') {
//       res += str.slice(i, i+1).replaceAll(str[i], '&quot;');
//     } else if (str[i] === "'") {
//       res += str.slice(i, i+1).replaceAll(str[i], '&apos;');
//     } else {
//       res += str[i];
//     }
//   }

//   return res;
// }

// console.log(convertHTML('Dolce & Gabbana')); //Dolce &amp; Gabbana
// console.log(convertHTML('Hamburgers < Pizza < Tacos')); //Hamburgers &lt; Pizza &lt; Tacos
// console.log(convertHTML('Stuff in "quotation marks"')); //Stuff in &quot;quotation marks&quot;
// console.log(convertHTML('<>')); //&lt;&gt;
// console.log('abc'); //abc
// console.log(convertHTML("Schindler's List")); //Schindler&apos;s List

// --------------------------------------------------------------

// ===== Отримати із строки нову строку в нижньому регістру через -

// function urlSlug(title) {
//   return title[0] !== ' '
//     ? title
//         .split(/[^A-Za-z]+/)
//         .join('-')
//         .toLowerCase()
//     : title
//         .slice(1)
//         .split(/[^A-Za-z]+/)
//         .join('-')
//         .toLowerCase();
// }

// console.log(urlSlug('Winter Is Coming'));
// console.log(urlSlug('Winter.Is.Coming'));
// console.log(urlSlug('Winter,Is,Coming'));
// console.log(urlSlug(' Winter Is  Coming'));

// --------------------------------------------------------------

// ===== Сума всіх непарних чисел Фібоначчі =====

// function sumFibs(num) {
//   const arr = [0];
//   let sum = 1;
//   let i = 0;
//   while (sum <= num) {
//     arr.push(sum);
//     i += 1;
//     sum = arr[i - 1] + arr[i];
//   }
//   return arr.filter(el => el % 2).reduce((acc, el) => (acc += el), 0);
// }

// console.log(sumFibs(4)); //5
// console.log(sumFibs(1000)); //1785
// console.log(sumFibs(4000000)); //4613732

// --------------------------------------------------------------

// ===== Сума всіх простих чисел =====

// function sumPrimes(num) {
//   const arrSimpleNumbers = [2];
//   for (let i = 3; i <= num; i += 1) {
//     if (arrSimpleNumbers.every(el => i % el)) {
//       arrSimpleNumbers.push(i);
//     }
//   }

//   return arrSimpleNumbers.reduce((acc,el)=> acc+=el,0);
// }

// console.log(sumPrimes(10)); //17
// console.log(sumPrimes(977)); //73156

// --------------------------------------------------------------

// ===== Найменше спільне кратне =====

// function smallestCommons(arr) {
//   arr.sort((a, b) => a - b);
//   const arrAllNumbers = [];
//   for (let i = arr[0]; i <= arr[1]; i += 1) {
//     arrAllNumbers.push(i);
//   }

//   let a = arrAllNumbers[0];

//   for (let i = 1; i < arrAllNumbers.length; i += 1) {
//     let b = arrAllNumbers[i];
//     let c = a;

//     while (a && b) {
//       a > b ? (a %= b) : (b %= a);
//     }
//     a = (c * arrAllNumbers[i]) / (a + b);
//   }

//   return a;
// }

// console.log(smallestCommons([1, 5])); //60
// console.log(smallestCommons([1, 13])); //360360
// console.log(smallestCommons([23, 18])); //6056820

// --------------------------------------------------------------

// ===== Облиште =====
/**
 * Переберіть масив arr та вилучіть кожен елемент, починаючи з першого елемента (індекс 0),
 * допоки функція func не поверне true, коли ітерований елемент пройде крізь.
 * Потім поверніть решту масиву, якщо умову виконано. В іншому випадку arr має повертатися
 * у вигляді порожнього масиву.
 */

// function dropElements(arr, func) {
//   return !!~arr.findIndex(func) ? arr.slice(arr.findIndex(func)) : [];
// }

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n >= 3;
//   }),
// ); //[3,4]
// console.log(
//   dropElements([0, 1, 0, 1], function (n) {
//     return n === 1;
//   }),
// ); //[1,0,1]
// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n > 5;
//   }),
// ); //[]
// console.log(
//   dropElements([1, 2, 3, 9, 2], function (n) {
//     return n > 2;
//   }),
// ); //[3,9,2]

// --------------------------------------------------------------

// ===== Нездоланна сила =====
/**
 * Вирівняйте вкладений масив. Ви повинні врахувати різні рівні вкладення.
 */

// function steamrollArray(arr) {
//   let result = [];
//   for (const element of arr) {
//     if (Array.isArray(element)) {
//       result = result.concat(steamrollArray(element));
//     } else {
//       result.push(element);
//     }
//   }
//   return result;
// }

// console.log(steamrollArray([[['a']], [['b']]])); //["a", "b"]
// console.log(steamrollArray([1, [2], [3, [[4]]]])); //[1, 2, 3, 4]
// console.log(steamrollArray([1, [], [3, [[4]]]])); //[1, 3, 4]
// console.log(steamrollArray([1, {}, [3, [[4]]]])); //[1, {}, 3, 4]

// --------------------------------------------------------------

// ===== Бінарні агенти =====
/**
 * Поверніть переданий бінарний рядок, перекладений англійською мовою.
 * Бінарний рядок буде розділений пробілом.
 */

// function binaryAgent(str) {
//   return str
//     .split(' ')
//     .map(el => String.fromCharCode('0b' + el))
//     .join('');
// }

// console.log(
//   binaryAgent(
//     '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111',
//   ),
// );

// --------------------------------------------------------------

// ===== Усе вірно =====
/**
 * Перевірте, чи предикат (другий аргумент) є істинним для
 * усіх елементів колекції (перший аргумент).
 */

// function truthCheck(collection, pre) {
//   return collection.every(el => el[pre]);
// }

// console.log(
//   truthCheck(
//     [
//       { name: 'Quincy', role: 'Founder', isBot: false },
//       { name: 'Naomi', role: '', isBot: false },
//       { name: 'Camperbot', role: 'Bot', isBot: true },
//     ],
//     'isBot',
//   ),
// ); //false

// console.log(
//   truthCheck(
//     [
//       { name: 'Pikachu', number: 25, caught: 3 },
//       { name: 'Togepi', number: 175, caught: 1 },
//     ],
//     'number',
//   ),
// ); //true

// --------------------------------------------------------------

// ===== Додаткові аргументи =====
/**
 * Створіть функцію, яка додає два аргументи. Якщо вказано лише один аргумент,
 * то поверніть функцію, яка очікує один аргумент і повертає суму.
 */

// function addTogether(...arg1) {
//   if (arg1.length === 2 && typeof arg1[0] === 'number' && typeof arg1[1] === 'number') {
//     return arg1[0] + arg1[1];
//   }
//   if (arg1.length === 1) {
//     if (typeof arg1[0] === 'number') {
//       return function (...arg2) {
//         return typeof arg2[0] === 'number' ? arg1[0] + arg2[0] : undefined;
//       };
//     }
//     return undefined;
//   }
//   return undefined;
// }

// console.log(addTogether(2, 3)); //5
// console.log(addTogether(5)(7)); //12
// console.log(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ')); //undefined
// console.log(addTogether(2)([3])); //undefined
// console.log(addTogether(2, '3')); //undefined
// console.log(addTogether(5, undefined)); //undefined

// --------------------------------------------------------------

// ===== Створіть людину =====
/**
 * Заповніть конструктор об’єкта, використовуючи наведені нижче методи:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 */

// const Person = function (firstAndLast) {
//   let firstName = firstAndLast.split(' ')[0];
//   let lastName = firstAndLast.split(' ')[1];

//   this.setFirstName = function (first) {
//     firstName = first;
//   };
//   this.setLastName = function (last) {
//     lastName = last;
//   };
//   this.setFullName = function (firstAndLast) {
//     firstName = firstAndLast.split(' ')[0];
//     lastName = firstAndLast.split(' ')[1];
//     return `${firstName} ${lastName}`;
//   };
//   this.getFirstName = function () {
//     return firstName;
//   };
//   this.getLastName = function () {
//     return lastName;
//   };
//   this.getFullName = function () {
//     return `${firstName} ${lastName}`;
//   };
//   return firstAndLast;
// };

// const bob = new Person('Bob Ross');

// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.getFullName());
// console.log(bob.setFirstName('Haskell'));
// console.log(bob.getFullName());
// console.log(bob.setLastName('Curry'));
// console.log(bob.getFullName());
// console.log(bob.setFullName('New People'));

// --------------------------------------------------------------

// ===== Карта орбіт =====

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   const period = [];
//   for (const planet of arr) {
//     planet.orbitalPeriod = Math.round(
//       2 * Math.PI * Math.pow(Math.pow(planet.avgAlt + earthRadius, 3) / GM, 0.5),
//     );
//     period.push(planet);
//     delete planet.avgAlt;
//   }
//   return period;
// }

// //[{name: "sputnik", orbitalPeriod: 86400}]
// console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));

// //[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734},
// // { name: "moon", orbitalPeriod: 2377399 }]
// console.log(
//   orbitalPeriod([
//     { name: 'iss', avgAlt: 413.6 },
//     { name: 'hubble', avgAlt: 556.7 },
//     { name: 'moon', avgAlt: 378632.553 },
//   ]),
// );

// --------------------------------------------------------------

// ===== Пошук унікального елемента =====

// function findUniq(arr) {
//   const newArr = arr.map(el => el.toLowerCase().split('').sort().join('')).sort();
//   return !!~newArr.slice(1).indexOf(newArr[0]) ? newArr[newArr.length - 1] : newArr[0];
// }

// // let res = newArr[0];
// // for (let i = 1; i < newArr.length; i += 1) {
// //   if (res === newArr[i]) {
// //     return newArr.find(el => el !== newArr[i]);
// //   }
// // }
// // return res;

// console.log(findUniq(['abc', 'cab', 'foo', 'bac']));
// console.log(findUniq(['foo', 'abc', 'cab', 'bac']));
// console.log(findUniq(['bac', 'abc', 'cab', 'foo']));
// console.log(findUniq(['bac', 'Abc', 'cAb', 'aaa']));

// --------------------------------------------------------------

// ===== Пошук нарциса =====

// Потрібно створити функцію яка буде шукати нарциса. Головна умова - нарциса знають всі,
// нарцис не знає нікого.

// function findNarcis(people) {
//   const narcis = [];
//   people.forEach(({ know, name }) => {
//     if (!Object.values(know).length) {
//       narcis.push(name);
//     }
//   });

//   return narcis.length === 1 ? console.log(narcis[0]) : console.log('Not found');
// }

// // Not found
// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Alex'],
//   },
// ];
// //Not found
// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ];

// // jhon
// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ];

// findNarcis(people1);
// findNarcis(people2);
// findNarcis(people3);

// --------------------------------------------------------------

// ===== Імплементація map на прототипі =====

// Array.prototype.myMap = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i += 1) {
//     newArray.push(callback(this[i], i, this));
//   }

//   return newArray;
// };

// console.log([23, 65, 98, 5, 13].myMap(item => item * 2)); // [46, 130, 196, 10, 26]
// console.log(['naomi', 'quincy', 'camperbot'].myMap(element => element.toUpperCase())); // ["NAOMI", "QUINCY", "CAMPERBOT"]
// console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])); // [1, 2, 5, 2, 1]

// --------------------------------------------------------------

// ===== Імплементація filter на прототипі =====

// Array.prototype.myFilter = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i += 1) {
//     if (callback(this[i], i, this)) {
//       newArray.push(this[i]);
//     }
//   }

//   return newArray;
// };

// console.log([23, 65, 98, 5, 13].myFilter(item => item % 2)); // [23, 65, 5, 13]
// console.log(['naomi', 'quincy', 'camperbot'].myFilter(element => element === 'naomi')); // ["naomi"]
// console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)); // [1, 2, 5]

// --------------------------------------------------------------

// ===== Перевірка паліндрому =====

// function palindrome(str) {
//   const regex = /[a-zA-Z0-9]/g;
//   const clearString = str.match(regex).join('').toLowerCase().split('');
//   let reverseString = [];
//   for (let i = clearString.length - 1; i >= 0; i -= 1) {
//     reverseString.push(clearString[i]);
//   }

//   return clearString.join('') === reverseString.join('') ? true : false;
// }
// // true
// console.log(palindrome('eye'));
// console.log(palindrome('_eye'));
// console.log(palindrome('race car'));
// console.log(palindrome('A man, a plan, a canal. Panama'));
// console.log(palindrome('never odd or even'));
// console.log(palindrome('My age is 0, 0 si ega ym.'));
// console.log(palindrome('0_0 (: /- :) 0-0'));

// // false
// console.log(palindrome('not a palindrome'));
// console.log(palindrome('nope'));
// console.log(palindrome('almostomla'));
// console.log(palindrome('1 eye for of 1 eye.'));
// console.log(palindrome('five|_/|four'));

// --------------------------------------------------------------

// ===== Конвертер римських чисел =====

// function convertToRoman(num) {
//   let units = '';
//   let tens = '';
//   let hundreds = '';
//   let thousands = '';

//   if (num < 10) {
//     units = String(num);
//   } else if (num >= 10 && num < 100) {
//     tens = String(num).split('')[0];
//     units = String(num).split('')[1];
//   } else if (num >= 100 && num < 1000) {
//     hundreds = String(num).split('')[0];
//     tens = String(num).split('')[1];
//     units = String(num).split('')[2];
//   } else {
//     thousands = String(num).split('')[0];
//     hundreds = String(num).split('')[1];
//     tens = String(num).split('')[2];
//     units = String(num).split('')[3];
//   }

//   let result = [];

//   switch (thousands) {
//     case '1':
//       result.push('M');
//       break;
//     case '2':
//       result.push('MM');
//       break;
//     case '3':
//       result.push('MMM');
//       break;
//   }

//   switch (hundreds) {
//     case '1':
//       result.push('C');
//       break;
//     case '2':
//       result.push('CC');
//       break;
//     case '3':
//       result.push('CCC');
//       break;
//     case '4':
//       result.push('CD');
//       break;
//     case '5':
//       result.push('D');
//       break;
//     case '6':
//       result.push('DC');
//       break;
//     case '7':
//       result.push('DCC');
//       break;
//     case '8':
//       result.push('DCCC');
//       break;
//     case '9':
//       result.push('CM');
//       break;
//   }

//   switch (tens) {
//     case '1':
//       result.push('X');
//       break;
//     case '2':
//       result.push('XX');
//       break;
//     case '3':
//       result.push('XXX');
//       break;
//     case '4':
//       result.push('XL');
//       break;
//     case '5':
//       result.push('L');
//       break;
//     case '6':
//       result.push('LX');
//       break;
//     case '7':
//       result.push('LXX');
//       break;
//     case '8':
//       result.push('LXXX');
//       break;
//     case '9':
//       result.push('XC');
//       break;
//   }

//   switch (units) {
//     case '1':
//       result.push('I');
//       break;
//     case '2':
//       result.push('II');
//       break;
//     case '3':
//       result.push('III');
//       break;
//     case '4':
//       result.push('IV');
//       break;
//     case '5':
//       result.push('V');
//       break;
//     case '6':
//       result.push('VI');
//       break;
//     case '7':
//       result.push('VII');
//       break;
//     case '8':
//       result.push('VIII');
//       break;
//     case '9':
//       result.push('IX');
//       break;
//   }

//   return result.join('');
// }

// console.log(convertToRoman(2)); // II
// console.log(convertToRoman(3)); // III
// console.log(convertToRoman(4)); // IV
// console.log(convertToRoman(5)); // V
// console.log(convertToRoman(9)); // IX
// console.log(convertToRoman(12)); // XII
// console.log(convertToRoman(16)); // XVI
// console.log(convertToRoman(29)); // XXIX
// console.log(convertToRoman(44)); // XLIV
// console.log(convertToRoman(45)); // XLV
// console.log(convertToRoman(68)); // LXVIII
// console.log(convertToRoman(83)); // LXXXIII
// console.log(convertToRoman(97)); // XCVII
// console.log(convertToRoman(99)); // XCIX
// console.log(convertToRoman(400)); // CD
// console.log(convertToRoman(500)); // D
// console.log(convertToRoman(501)); // DI
// console.log(convertToRoman(649)); // DCXLIX
// console.log(convertToRoman(798)); // DCCXCVIII
// console.log(convertToRoman(891)); // DCCCXCI
// console.log(convertToRoman(1000)); // M
// console.log(convertToRoman(1004)); // MIV
// console.log(convertToRoman(1006)); // MVI
// console.log(convertToRoman(1023)); // MXXIII
// console.log(convertToRoman(2014)); // MMXIV
// console.log(convertToRoman(3999)); // MMMCMXCIX

// --------------------------------------------------------------

// ===== Шифр Цезаря =====

// function rot13(str) {
//   let unCodeStr = [];

//   for (const element of str.split(' ')) {
//     let word = [];
//     for (let i = 0; i < element.length; i += 1) {
//       const uniCodLetter = element.split('')[i].charCodeAt();
//       if (uniCodLetter === 33 || uniCodLetter === 46 || uniCodLetter === 63) {
//         word.push(String.fromCharCode(uniCodLetter));
//       } else {
//         uniCodLetter - 13 < 65
//           ? word.push(String.fromCharCode(uniCodLetter + 13))
//           : word.push(String.fromCharCode(uniCodLetter - 13));
//       }
//     }
//     unCodeStr.push(word.join(''));
//   }

//   // str.charCodeAt(); // отримання юнікоду символу
//   // String.fromCharCode(unicod); // отримання символу по юнікоду
//   return unCodeStr.join(' ');
// }

// console.log(rot13('SERR PBQR PNZC')); // FREE CODE CAMP
// console.log(rot13('SERR CVMMN!')); // FREE PIZZA!
// console.log(rot13('SERR YBIR?')); // FREE LOVE?
// // // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
// console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));

// --------------------------------------------------------------

// ===== Валідатор мобільного номера =====

// function telephoneCheck(str) {
//   if (
//     str.match(/\d/g).length < 10 ||
//     str.match(/\d/g).length > 11 ||
//     (str.includes('(') && !str.includes(')')) ||
//     (!str.includes('(') && str.includes(')')) ||
//     str.startsWith('-') ||
//     str.endsWith(')') ||
//     str.includes('?')
//   ) {
//     return false;
//   }

//   if (
//     (str.match(/\d/g).length === 11 && !str.startsWith('1')) ||
//     str.match(/\S+/)[0].length === 2
//   ) {
//     return false;
//   }
//   return true;
// }

// // true
// console.log(telephoneCheck('1 555-555-5555'));
// console.log(telephoneCheck('1 (555) 555-5555'));
// console.log(telephoneCheck('5555555555'));
// console.log(telephoneCheck('555-555-5555'));
// console.log(telephoneCheck('(555)555-5555'));
// console.log(telephoneCheck('1(555)555-5555'));
// console.log(telephoneCheck('1 555 555 5555'));
// console.log(telephoneCheck('1 456 789 4444'));
// // // false
// console.log(telephoneCheck('2 (757) 622-7382'));
// console.log(telephoneCheck('0 (757) 622-7382'));
// console.log(telephoneCheck('-1 (757) 622-7382'));
// console.log(telephoneCheck('2 757 622-7382'));
// console.log(telephoneCheck('10 (757) 622-7382'));
// console.log(telephoneCheck('27576227382'));
// console.log(telephoneCheck('(275)76227382'));
// console.log(telephoneCheck('2(757)6227382'));
// console.log(telephoneCheck('2(757)622-7382'));
// console.log(telephoneCheck('555)-555-5555'));
// console.log(telephoneCheck('(555-555-5555'));
// console.log(telephoneCheck('(555)5(55?)-5555'));
// console.log(telephoneCheck('55 55-55-555-5'));
// console.log(telephoneCheck('11 555-555-5555'));
// console.log(telephoneCheck('555-5555'));
// console.log(telephoneCheck('5555555'));
// console.log(telephoneCheck('1 555)555-5555'));
// console.log(telephoneCheck('123**&!!asdf#'));
// console.log(telephoneCheck('55555555'));
// console.log(telephoneCheck('(6054756961)'));

// --------------------------------------------------------------

// ===== Касовий апарат =====

// function checkCashRegister(price, cash, cid) {
//   let change = cash - price;
//   let cashCoin = 0;
//   let cashBanknote = 0;
//   let arrresult = [];

//   // підрахунок суми монет
//   for (let i = 0; i <= 3; i += 1) {
//     cashCoin += cid[i][1];
//   }

//   // підрахунок суми банкнот
//   for (let i = 4; i <= 8; i += 1) {
//     cashBanknote += cid[i][1];
//   }

//   // логіка, яка відповідає за пусту касу
//   if (cashCoin + cashBanknote === change) {
//     return { status: 'CLOSED', change: cid };
//   }

//   // логіка, яка відповідає за нехватку коштів в касі
//   if (cashCoin + cashBanknote < change || change - Math.floor(change) > cashCoin) {
//     return { status: 'INSUFFICIENT_FUNDS', change: [] };
//   }

//   // логіка, яка рахує як дати здачу
//   if (change / 100 > 1) {
//     if (cid[8][1] - parseInt(change / 100) * 100 > 0) {
//       cid[8][1] = parseInt(change / 100) * 100;
//       arrresult.push(cid[8]);
//       change = (change - parseInt(change / 100) * 100).toFixed(2);
//     } else {
//       change = (change - cid[8][1]).toFixed(2);
//       arrresult.push(cid[8]);
//     }
//   }
//   if (change / 20 > 1) {
//     if (cid[7][1] - parseInt(change / 20) * 20 > 0) {
//       cid[7][1] = parseInt(change / 20) * 20;
//       arrresult.push(cid[7]);
//       change = (change - parseInt(change / 20) * 20).toFixed(2);
//     } else {
//       change = (change - cid[7][1]).toFixed(2);
//       arrresult.push(cid[7]);
//     }
//   }
//   if (change / 10 > 1) {
//     if (cid[6][1] - parseInt(change / 10) * 10 > 0) {
//       cid[6][1] = parseInt(change / 10) * 10;
//       arrresult.push(cid[6]);
//       change = (change - parseInt(change / 10) * 10).toFixed(2);
//     } else {
//       change = (change - cid[6][1]).toFixed(2);
//       arrresult.push(cid[6]);
//     }
//   }
//   if (change / 5 > 1) {
//     if (cid[5][1] - parseInt(change / 5) * 5 > 0) {
//       cid[5][1] = parseInt(change / 5) * 5;
//       arrresult.push(cid[5]);
//       change = (change - parseInt(change / 5) * 5).toFixed(2);
//     } else {
//       change = (change - cid[5][1]).toFixed(2);
//       arrresult.push(cid[5]);
//     }
//   }
//   if (change / 1 > 1) {
//     if (cid[4][1] - parseInt(change) > 0) {
//       cid[4][1] = parseInt(change);
//       arrresult.push(cid[4]);
//       change = (change - parseInt(change)).toFixed(2);
//     } else {
//       change = (change - cid[4][1]).toFixed(2);
//       arrresult.push(cid[4]);
//     }
//   }
//   if (change / 0.25 > 1) {
//     if (cid[3][1] - parseInt(change / 0.25) * 0.25 > 0) {
//       cid[3][1] = parseInt(change / 0.25) * 0.25;
//       arrresult.push(cid[3]);
//       change = (change - parseInt(change / 0.25) * 0.25).toFixed(2);
//     } else {
//       change = (change - cid[3][1]).toFixed(2);
//       arrresult.push(cid[3]);
//     }
//   }
//   if (change / 0.1 > 1) {
//     if (cid[2][1] - parseInt(change / 0.1) * 0.1 > 0) {
//       cid[2][1] = parseInt(change / 0.1) * 0.1;
//       arrresult.push(cid[2]);
//       change = (change - parseInt(change / 0.1) * 0.1).toFixed(2);
//     } else {
//       change = (change - cid[2][1]).toFixed(2);
//       arrresult.push(cid[2]);
//     }
//   }
//   if (change / 0.05 > 1) {
//     if (cid[1][1] - parseInt(change / 0.05) * 0.05 > 0) {
//       cid[1][1] = parseInt(change / 0.05) * 0.05;
//       arrresult.push(cid[1]);
//       change = (change - parseInt(change / 0.05) * 0.05).toFixed(2);
//     } else {
//       change = (change - cid[1][1]).toFixed(2);
//       arrresult.push(cid[1]);
//     }
//   }
//   if (change / 0.01 > 1) {
//     if (cid[0][1] - parseInt(change / 0.01) * 0.01 > 0) {
//       cid[0][1] = parseInt(change / 0.01) * 0.01;
//       arrresult.push(cid[0]);
//       change -= parseInt(change / 0.01) * 0.01;
//     } else {
//       change = (change - cid[0][1]).toFixed(2);
//       arrresult.push(cid[0]);
//     }
//   }

//   return { status: 'OPEN', change: arrresult };
// }

// // {status: "OPEN", change: [["QUARTER", 0.5]]}
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01], // 0.01
//     ['NICKEL', 2.05], // 0.05
//     ['DIME', 3.1], // 0.1
//     ['QUARTER', 4.25], // 0.25
//     ['ONE', 90], // 1
//     ['FIVE', 55], // 5
//     ['TEN', 20], // 10
//     ['TWENTY', 60], // 20
//     ['ONE HUNDRED', 100], // 100
//   ]),
// );

// // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ]),
// );

// // {status: "INSUFFICIENT_FUNDS", change: []}
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ]),
// );

// // {status: "INSUFFICIENT_FUNDS", change: []}
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ]),
// );

// // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ]),
// );

// --------------------------------------------------------------

// function accum(s) {
//   let result = [];
//   const arr = s.split('');
//   for (let i = 0; i < arr.length; i += 1) {
//     let res = [];
//     res.push(arr[i].toUpperCase());
//     for (let j = 1; j <= i; j += 1) {
//       res.push(arr[i].toLowerCase());
//     }
//     result.push(res.join(''));
//   }
//   return result.join('-');
// }

// //*************⬆️
// // function accum(s) {
// // 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// // }

// console.log(accum('ZpglnRxqenU'));

// --------------------------------------------------------------

// var summation = function (num) {
//   let sum = 0;
//   for (let i = num; i > 0; i -= 1) {
//     sum += i;
//   }
//   return sum;

// //*************⬆️
//   return (num * (num + 1)) / 2;
// };

// console.log(summation(1)); // 1
// console.log(summation(2)); // 3
// console.log(summation(8)); // 36

// --------------------------------------------------------------

// function printerError(s) {
//   const arr = s.split('');
//   let err = 0;
//   for (const el of arr) {
//     if (el.charCodeAt() > 109) {
//       err += 1;
//     }
//   }

//   return err + '/' + s.length;
// }

// //*************⬆️

// function printerError(s) {
//   return s.match(/[n-z]+/g || []).join('').length + '/' + s.length;
//   AБО
// return `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
// }

// 3/56
// console.log(printerError('aaaaaaaaaawaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));

// --------------------------------------------------------------

// function getMiddle(s) {
//   if (s.length === 1) {
//     return s;
//   }

//   return s.length % 2 ? s.charAt(s.length / 2) : s.slice(s.length / 2 - 1, s.length / 2 + 1);
// }

// console.log(getMiddle('test')); // es
// console.log(getMiddle('testing')); // t
// console.log(getMiddle('middle')); // dd
// console.log(getMiddle('A')); // A

// --------------------------------------------------------------

// function getCount(str) {
//   return str.match(/[a,e,i,o,u]/g || []).length;

//   //АБО

//   return str.replace(/[^a,e,i,o,u]/g, '').length;
// }

// console.log(getCount('abracadabra')); // 5

// --------------------------------------------------------------

// function longest(s1, s2) {
//   const arr = (s1 + s2).split('').sort();
//   let res = [];

//   for (let el of arr) {
//     if (!res.includes(el)) {
//       res.push(el);
//     }
//   }

//   return res.join('');
// }

// //*************⬆️

// function longest(s1, s2) {
//   return [...new Set(s1 + s2)].sort().join('');
// }

// // "aehrsty"
// console.log(longest('aretheyhere', 'yestheyarehere'));

// // "abcdefghilnoprstu"
// console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'));

// --------------------------------------------------------------