//task 1

// Заданий масив з елементами [2, 3, 4, 5].
//  За допомогою циклу for знайдіть добуток елементів цього масиву.
//   Також реалізуйте завдання через while.

let arr = [2, 3, 4, 5];
let product = 1;
let i = 0;

for (; i < arr.length; i++) {
    product *= arr[i]
}
console.log(product)


while (i < arr.length) {
    product *= arr[i]
    i++
}
console.log(product)


//task 2

//  Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15.
//  Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.

// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even" 

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even ")
    } else {
        console.log(i + "  is odd")
    }
}

//task 3

// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
//  Випадкові числа генеруються із діапазону 1-500.

let k = [];

function randArray(numbers) {

    for (let i = 0; i < numbers; i++) {

        let min = 1;
        let max = 500;
        let elem = Math.floor(min + Math.random() * (max + 1 - min));

        k.push(elem)
    }
    return k
}

console.log(randArray(6))

// task 4

// Напишіть функцію raiseToDegree(a,b), 
// яка повертає результат піднесення числа a до степеня b. 
// Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

// Sample Output:
// raiseToDegree(3, 4);  // 81

let a = prompt('Enter number: ');
let b = prompt('Enter number: ');

number1 = Number(a);
number2 = Number(b);

function raiseToDegree(number1, number2) {
    if (Number.isInteger(number1, number2)) {
        result = number1 ** number2
        return result
    } else {
        return "Error!"
    }
}

console.log(raiseToDegree(number1, number2));


// task 5

// Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів 
// і повертати той, який має найменше значення. 
// Порада: для розв’язку можете скористатися спеціальним масивом arguments.

// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4

function findMin() {
    let smallestNumber = Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (smallestNumber > arguments[i]) {
            smallestNumber = arguments[i];
        }
    }
    return smallestNumber
}
console.log(findMin(12, 14, 4, -4, 0.2));
console.log(findMin(12, 14, -144, -4, 0.2));

//  task 6

// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
//  Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true


function findUnique(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    if (newArr.length == arr.length) {
        return true
    } else {
        return false
    }
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

// task 7

// Напишіть функцію, яка повертає останній елемент масиву. 
// Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр,
//  що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


function lastElem(array, n) {
    if (array == null || array.length == 0) {
        return null;
    }
    if (n == null) {
        return array[array.length - 1];
    }
    return array.slice(Math.max(array.length - n, 0));
};

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8))

// task 8

// Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

// Input string: 'i love java script' 
// Output string: 'I Love Java Script'

function writeTheFirstLetterOfEachWord(str) {
    let array = str.toLowerCase().split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() +
            array[i].substring(1);
    }
    return array.join(' ');
}
console.log(writeTheFirstLetterOfEachWord('i love java script'));