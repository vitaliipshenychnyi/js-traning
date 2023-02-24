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