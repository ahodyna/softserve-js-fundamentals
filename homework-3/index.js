//task 1
let arr = [2, 3, 4, 5];
let product = 1;

for (let i = 0; i < arr.length; i++) {
    product *= arr[i]
}
console.log(product)


while (product < arr.length) {
    product *= arr[i]
}
console.log(product)


//task 2
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even ")
    } else {
        console.log(i + "  is odd")
    }
}

//task 3
let k = [];

function randArray(numbers) {

    for (let i = 0; i < numbers; i++) {

        min = Math.ceil(1);
        max = Math.floor(500);
        let elem = Math.floor(Math.random() * (500 - 1 + 1)) + 1;

        k.push(elem)
    }
    return k
}

console.log(randArray(5))

// task 4
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
function writeTheFirstLetterOfEachWord(str) {
    let array = str.toLowerCase().split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() +
            array[i].substring(1);
    }
    return array.join(' ');
}
console.log(writeTheFirstLetterOfEachWord('i love java script'));