// Задача 1
/* 
Цель
Научиться совместно применять переменные, математические операторы и функции объекта Math.
*/

/* 
Запишите в переменные x и y координаты двух произвольных точек: 
x1, y1 — первая точка; 
x2, y2 — вторая точка. 
Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. 
Выведите результат с помощью console.log. 
*/

let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;

//  Находим длины сторон

let width = Math.abs(x1 - x2); // 2 - 10 = 8
let height = Math.abs(y1 - y2); // 3 - 5 = 2

// Вычисляем площадь
let area = width * height;

// Выводим результат в консоль

console.log("Площадь прямоугольника:", area);

// функция:

function areaRectangle(x1, y1, x2, y2) {
    let width = Math.abs(x1 - x2); 
    let height = Math.abs(y1 - y2);

    let area = width * height;

    return area
}

let result = areaRectangle(2, 3, 10, 5); 
console.log("Площадь прямоугольника:", result);



x1 = 10;
y1 = 5;

x2 = 2;
y2 = 3;

width = Math.abs(x1 - x2); // 10 - 2 = 8
height = Math.abs(y1 - y2); // 5 - 3 = 2
area = width * height;

console.log("Площадь прямоугольника:", area);


function areaRectangle1(x1, y1, x2, y2) {
    let width = Math.abs(x1 - x2); 
    let height = Math.abs(y1 - y2);
    let area = width * height;

    return area
}

let result1 = areaRectangle1(10, 5, 2, 3); 
console.log("Площадь прямоугольника:", result1);



x1 = -5;
y1 = 8;

x2 = 10;
y2 = 5;

width = Math.abs(x1 - x2); // 15
height = Math.abs(y1 - y2); // 3
area = width * height;

console.log('Площадь прямоугольника:' , area);


function areaRectangle2(x1, y1, x2, y2) {
    let width = Math.abs(x1 - x2);
    length = Math.abs(y1 - y2);
    let area = width * height

    return area
}

let result2 = areaRectangle2(-5, 8, 10, 5);
console.log('Площадь прямоугольника:' , result2);



x1 = 5;
y1 = 8;

x2 = 5;
y2 = 5;

width = Math.abs(x1 -x2);
height = Math.abs(y1 - y2);
area = width * height;

console.log('Площадь прямоугольника:' , area)

function areaRectangle3(x1, y1, x2, y2) {
    let width = Math.abs(x1 - x2);
    let height = Math.abs(y1 - y2);
    let area = width * height;

    return area
}

let result3 = areaRectangle3(5, 8, 5, 5);
console.log('Площадь прямоугольника:' , result3);



x1 = 8;
y1 = 1;

x2 = 5;
y2 = 1;

width = Math.abs(x1 -x2);
height = Math.abs(y2 - y2);
area = width * height;

console.log('Площадь прямоугольника:' , area)

function areaRectangle4(x1, y1, x2, y2) {
    let width = Math.abs(x1 - x2);
    let height = Math.abs(y1 - y2);
    let area = width * height;

    return area
}

let result4 = areaRectangle4(5, 8, 5, 5);
console.log('Площадь прямоугольника:' , result4);



// Задача 2
/*
Цель
Научиться округлять и точно сравнивать дробные части чисел
*/

/* 
Вычислите дробные части чисел a и b с точностью n.
Выведите получившиеся числа с помощью console.log. 
Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.
*/

let a = 13.123456789;
let b = 2.123; 
let n = 5;

// Находим множитель, например: 10 в 5 степени = 100000
let multiplier = Math.pow(10, n);

// Округляем числа целиком, сдвинув запятую. 
let numberA = Math.floor(a * multiplier); 
let numberB = Math.floor(b * multiplier); 

// Теперь отрезаем целую часть с помощью остатка от деления на сам множитель!
// 1312346 % 100000 оставит только последние 5 цифр -> 12346
let fractionA = numberA % multiplier;
let fractionB = numberB % multiplier;

console.log("Дробная часть A:", fractionA); // 12345
console.log("Дробная часть B:", fractionB); // 12300

// Сравнения
console.log("A > B:", fractionA > fractionB);   // true
console.log("A < B:", fractionA < fractionB);   // false
console.log("A === B:", fractionA === fractionB); // false
console.log("A !== B:", fractionA !== fractionB); // true

// 1. Создаем функцию. Она принимает любые a, b и n
function getFractional(a, b, n) {
    let multiplier = Math.pow(10, n);

    let numberA = Math.floor(a * multiplier); 
    let numberB = Math.floor(b * multiplier); 

    let fractionA = numberA % multiplier;
    let fractionB = numberB % multiplier;

    // Возвращаем массив из двух найденных чисел
    return [fractionA, fractionB];
}

// 2. Вызываем функцию для первого примера
// JavaScript автоматически запишет первое число в frA, а второе в frB
let [frA, frB] = getFractional(13.123456789, 2.123, 5);

console.log("Дробная часть A:", frA); // 12345
console.log("Дробная часть B:", frB); // 12300

// 3. Выводим результаты сравнения
console.log("A > B:", frA > frB);   // true
console.log("A < B:", frA < frB);   // false
console.log("A === B:", frA === frB); // false
console.log("A !== B:", frA !== frB); // true



//
a = 13.890123;
b = 2.891564;
n = 2;

multiplier = Math.pow(10, n); //100

numberA = Math.floor(a * multiplier); // 1389
numberB = Math.floor(b * multiplier); // 289

fractionA = numberA % multiplier; // 89
fractionB = numberB % multiplier; // 89

console.log("Дробная часть A:", fractionA); 
console.log("Дробная часть B:", fractionB); 

// Сравнения
console.log("A > B:", fractionA > fractionB); // false
console.log("A < B:", fractionA < fractionB); // false   
console.log("A === B:", fractionA === fractionB); // true
console.log("A !== B:", fractionA !== fractionB); // false


function getFractional1(a, b, n) {
    let multiplier = Math.pow(10, n);

    let numberA = Math.floor(a * multiplier); 
    let numberB = Math.floor(b * multiplier); 

    let fractionA = numberA % multiplier;
    let fractionB = numberB % multiplier;

    return [fractionA, fractionB];
}


let [frA1, frB1] = getFractional1(13.890123, 2.891564, 2);

console.log("Дробная часть A:", frA1); // 89
console.log("Дробная часть B:", frB1); // 89

console.log("A > B:", frA1 > frB1);   // false
console.log("A < B:", frA1 < frB1);   // false
console.log("A === B:", frA1 === frB1); // true
console.log("A !== B:", frA1 !== frB1); // false



//
a = 13.890123;
b = 2.891564;
n = 3;

multiplier = Math.pow(10, n); //1000

numberA = Math.floor(a * multiplier); // 13890
numberB = Math.floor(b * multiplier); // 2891

fractionA = numberA % multiplier; // 890
fractionB = numberB % multiplier; // 891

console.log("Дробная часть A:", fractionA); 
console.log("Дробная часть B:", fractionB); 

// Сравнения
console.log("A > B:", fractionA > fractionB); // false
console.log("A < B:", fractionA < fractionB); // true   
console.log("A === B:", fractionA === fractionB); // false
console.log("A !== B:", fractionA !== fractionB); // true


function getFractional2(a, b, n) {
    let multiplier = Math.pow(10, n);

    let numberA = Math.floor(a * multiplier); 
    let numberB = Math.floor(b * multiplier); 

    let fractionA = numberA % multiplier;
    let fractionB = numberB % multiplier;

    return [fractionA, fractionB];
}


let [frA2, frB2] = getFractional2(13.890123, 2.891564, 3);

console.log("Дробная часть A:", frA2); // 890
console.log("Дробная часть B:", frB2); // 891

console.log("A > B:", frA2 > frB2);   // false
console.log("A < B:", frA2 < frB2);   // true
console.log("A === B:", frA2 === frB2); // false
console.log("A !== B:", frA2 !== frB2); // true