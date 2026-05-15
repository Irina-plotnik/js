/* Вычисляем расстояние между дыумя точками.
Даны координаты х, у 2-х точекю Нужно вывести расстояние между ними.
вычисляем по теореме Пифагора.
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;


/* Чтобы найти длину сторон виртуального прямоугольного треугольника,
нам нужно вычесть координаты точек друг из друга.
*/
let cathetus1 = Math.abs(x1 - x2); // 10 - (-3) = 13
let cathetus2 = Math.abs(y1 - y2); // 2 - 3 = -1

console.log(Math.sqrt(
    Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2) // корень 13**2 + (-1)**2 = 13.038
));


function getDistance(x1, y1, x2, y2) {
    let cathetus1 = Math.abs(x1 - x2); 
    let cathetus2 = Math.abs(y1 - y2);

    return Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2));
}

let result = getDistance(10, 2, -3, 3); 
console.log(result);


/*
Сравниваем два дробных числа с указанной точностью.
даны два числа и количество знаков после запятой, которое необходимо учитывать.
Вывести информациб, равны ли эти числа, больше ли первое число или меньше второго.
*/

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormaLised = Math.round(
    first * Math.pow(10, precision)
);
let secondNormaLised = Math.round(
    second * Math.pow(10, precision)
);

console.log('Исходные числа равны' , first === second); // false
console.log('Числа равны' , firstNormaLised === secondNormaLised); // true
console.log('Первое число больше' , firstNormaLised > secondNormaLised); // false
console.log('Первое число меньше' , firstNormaLised < secondNormaLised); // false


function compareNumbers(first, second, precision) {
    // 1. Переводим в целые числа с нужной точностью
    let firstNormalised = Math.round(first * Math.pow(10, precision));
    let secondNormalised = Math.round(second * Math.pow(10, precision));

     // 2. Проверяем условия с помощью конструкции if / else
    if (firstNormalised === secondNormalised) {
        return 'Числа равны';
    } else if (firstNormalised > secondNormalised) {
        return 'Первое число больше';
    } else {
        return 'Первое число меньше'; 
    }
}

// Проверяем работу функции:
let num1 = 0.1 + 0.2 + 0.033; // В сумме 0.333
let num2 = 0.33334;

// Сравниваем с точностью 3 знака после запятой (0.333 и 0.333)
console.log(compareNumbers(num1, num2, 3)); // Выведет: Числа равны

// Сравниваем с точностью 5 знаков после запятой (0.33300 и 0.33334)
console.log(compareNumbers(num1, num2, 5));


/* 
Генератор случайных целых чисел от n до m.
Учесть, что n необязательно меньше, чем m!
*/

let n = -100;
let m = 350;

// количество цифр, которые могут быть сгенерированы (ширина диапозона м/д числами)
let range = Math.abs(m - n); // 450
// округленное число от 0 до range
let numberInRange = Math.round(Math.random() * range);
// левая граница возможного числа
let min = Math.min(n, m);

console.log(min + numberInRange);


function getRandomInt(n, m) {
    let range = Math.abs(m - n);
    let numberInRange = Math.round(Math.random() * range);
    let min = Math.min(n, m);

    return min + numberInRange;
}

let firstResult = getRandomInt(-100, 350);
console.log(firstResult);

let secondResult = getRandomInt(350, -100);
console.log(secondResult);


/*
Выводим отдельно целую и дробную части числа с точностью n.
*/

let precisions = 3;
let number = 0x12f + .3 + .1;

console.log('Исходное число' , number);

console.log('Целая часть' , Math.floor(number));
// остаток деления на 1 возвращает дробную часть
console.log('Дробная часть' , Math.round(number % 1 * Math.pow(10, precision)));


function splitNumber(precision, number) {
    let integerPart =  Math.floor(number);
    let fractionalPart = Math.round(number % 1 * Math.pow(10, precisions));

    return [integerPart, fractionalPart];
}

let final = splitNumber(precisions, number);
console.log(final);