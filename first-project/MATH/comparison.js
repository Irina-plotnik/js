// сравнения чисел

let x = 10;
let y = 20;

console.log(x === y); // false
console.log(x === 10); // true

console.log(x !== y); // true
console.log(x !== 10); // false

console.log(x > y); // false
console.log(x < y); // true

console.log(x >= y); // false
console.log(x <= y); // true

true === true; // true
true !== true; // false
true === false; // false
true !== false; // true

"строка" === 'строка'; // true
'строка' === `строка`; // true
"строка" === `строка`; // true

"строка" === 'строка' === `строка`; // false, важен порядок вычислений

'строка1' !== 'строка2'; // true

// === и !== всегда вернет false при сравнении значений разных типов
false !== 0;
true !== 1;
0 !== '';
3 !== '3';
false !== '';
true !== 'true';

// сравнение строк происходит посимвольно по кодам символа, условно "по алфавиту"
'z' > 'a'; // 122 > 97
'az' > 'axzzz'; // a ===, z > x, дальше не проверяем
'z' > 'Z'; // 122 > 90
'10' < '5'; // код символа 1 < 5
'10' > '05';

// сравнение строк и чисел
'10' > 5; // true
10 > '5'; // true
10 > 'x'; // false, 'x' не число (NaN)
10 < 'x'; // false, 'x' не число (NaN)

// сравнения с boolean всегда сводятся к сравнению чисел
// true - 1, false - 0
1 > false; // true, 1 > 0
0 < true; // true, 0 < 1
'10' > true; // true, 10 > 1
'1' > true; // false, 1 > 1
'1' > false; // true, 1 > 0
'x' > true; // false, NaN > 1