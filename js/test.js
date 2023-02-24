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
