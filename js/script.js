// Задача 1
// Знайти периметр і площу прямокутника, якщо сторона a = 4, b = 5

// let a = 4
// let b = 5
// let sum = a + b
// let p = sum * 2
// let s = a * b
// console.log(p)
// console.log(s);



// Задача 2
// Знайти середнє арифметичне 3 чисел, a = 10, b = 15, c = 20.

// let a = 10
// let b = 15
// let c = 20
// let sum = a + b + c
// let res = sum / 3
// console.log(res);



// Задача 3
//  Знайти суму і добуток 3 довільних чисел

// let random_1 = Math.ceil(Math.random() * 100)
// let random_2 = Math.ceil(Math.random() * 100)
// let random_3 = Math.ceil(Math.random() * 100)

// let sum = random_1 + random_2 + random_3
// let mult = random_1 * random_2 * random_3

// console.log('Перше рандомне число:', random_1);
// console.log('Друге рандомне число:', random_2);
// console.log('Третє рандомне число:', random_3);

// console.log('Сума чисел:', sum);
// console.log('Добуток чисел:', mult);



// Задача 4
//  Знайти і вивести квадрат(число в 2 степені) будь-якого числа.

// let random = Math.ceil(Math.random() * 100)
// let res = random ** 2

// console.log(random);
// console.log(res);

// Задача 5
//   Користувач вводить, скільки Мегабайт(МБ) займає 1 фільм. Програма виводить, 
// скільки дискет треба для запису 3 фільмів(в одну дискету можна записати 1.44 МБ).

let mb = +prompt('Скільки mb займає 1 фільм')
const disket = 1.44

let films = 3 * mb
let res = Math.ceil(films / disket)
console.log('Для запису 3 фільмів потрібно ' + res + ' дискет');


