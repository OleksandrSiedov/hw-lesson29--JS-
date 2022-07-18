"use strict";


//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

/*

//НЕ РАБОТАЕТ!!!

const a = 0.1;
const b = 0.2;
let c = (a + b);
//с = 10; - почему это присвоение не работает?
// const c1 = с.toFixed(2); - и так не работате

*/

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

РАБОТАЕТ!

let d = '1';
let e = 2;
let f = +d + e; 

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

//РАБОТАЕТ!

const j = Number(prompt('Please specify the size of flash-drive in GB', ''));
alert(`Your flash drive can contain ${Math.floor(j * 1000 / 820)} files (820Mb each)`);

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

//РАБОТАЕТ!

const k = Number(prompt('Please specify the amount of money in your wallet, USD', ''));
const l = Number(prompt('Please specify the cost of a chocolatebar', ''));
alert(`Your will have ${Math.floor((k % l) * 100) / 100} USD and can buy ${Math.floor(k / l)} chocolate bars`);


//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).


//РАБОТАЕТ!

const m = Number(prompt (`Please enter three-digit number`, ''));
const m1 = Math.floor(m / 100);
const m2 = Math.floor(m % 100 / 10);
const m3 = m % 10;
alert(`${m3}${m2}${m1}`);


//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.


//РАБОТАЕТ!

const n = Number(prompt (`Please enter the amount of deposit, USD`, ''));
alert(`The amount of % for 2 months is ${(n * 0.05 / 12 * 2).toFixed(2)} USD`);
