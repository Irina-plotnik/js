/* Функция - именованный, обособленный участок кода, который выполняет конкретную задачу
и может быть многократно вызван из разных частей программы, те: переиспользоваться. 
Это «мини-программа» внутри основной программы, позволяющая структурировать код, избегать повторений и упрощать отладку.
*/

/**
 * Вычисление решения квадратного уравнения
 * a**x + bx + c = 0
 * @return значения x
 */

function squareX(a, b, c) {    
    let d = b * b - 4 * a * c;

    // console.log(a, b, c, d);

    if (d < 0) {
        console.log('Корней нет')
        return [];
    } else {
        if ( d === 0) {
            return [-b / (2 * a)];
        }
        // корень дискриминанта
        let dRoot = Math.sqrt(d);
        // [x1, x2]
        return [(-b + dRoot) / (2 * a), (-b - dRoot) / (2 * a)];
    }
}

let firstResult = squareX(2, 20, 8);
console.log(firstResult);

let secondResult = squareX(3, 20, 1);
console.log(secondResult);
    

let q = 1;
function qwe (a) {
    function f1 () {
        return a - 1;
    }

    function f2 () {
        return a * a;
    }

    let = f1() + f2();

    return let;
}

let a = qwe(2); // 5
console.log(q, a);