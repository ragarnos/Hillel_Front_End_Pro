// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let a = 20;
let b = 30;
for(a; a <= b; a += 0.5){
    console.log(a)
}



// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let c = 10;
let d = 100;
let dollar = 27;
for(c; c <= d; c += 10){
    console.log(c * dollar + ' грн')
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const num =  prompt('Введи число', '')
for(let i = 1; i <= num*num; i++){
    console.log(i);
}

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const numberUser = window.prompt('Введите целое число', '1');

if (Number(numberUser) === 0 || Number(numberUser) === 1)
{
    console.log("Складене число");
}
if (Number(numberUser) === 2 || Number(numberUser) === 3)
{
    console.log("Просте число");
}

for (let i = 2; i <= numberUser / 2; i++) 
{
    if (numberUser % i === 0) {
        console.log("Складене число");
    }else{
        console.log("Просте число")
    }
}

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number3 = window.prompt('Введите число', '1');

while (number3 % 3 === 0) {
    number3 = number3 / 3;
}
if (number3 === 1){
    console.log(true);
}else{
    console.log(false);
}