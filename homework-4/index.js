// **********task 1*****************

// Напишіть функцію testThrow(), 
// яка прийматиме параметр помилка exception і перевірятиме роботу оператора throw, 
// зокрема той факт, що як об’єкт помилки можна передати значення будь-якого типу

function testThrow(exception) {
    try {
        throw exception;
    } catch (error) {
        console.log('Caught: ' + error);
    }
}

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));



// **********task 2*************

// Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри 
// ширина прямокутника width і висота прямокутника height і обраховує його площу.
// Передбачити припинення виконання програми і генерацію винятку у випадку,
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.


function calcRectangleArea(width, height) {

    if (isNaN(width) || isNaN(height)) {
        throw ('Error! Parametr isn`t a number!');
    } else {
        let s = width * height

        return s
    }
}

try {
    console.log(calcRectangleArea('thms', 5));
}
catch (error) {
    console.log(error)
}


// **********task 3*************

// Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків

function checkAge() {

    try {
        processUserInput()

    } catch (exception) {
        alert(exception.name + "!" + exception.message)
    }
}

function processUserInput() {
    let data = prompt('Enter your age')

    if (data === "") {
        throw new Error('The field is empty! Please enter your age');
    } else if (isNaN(data)) {
        throw new Error('Parametr is not a number!');
    } else if (data < 14) {
        throw new Error('You is smaller than 14 years old');
    } else {
        alert('Click OK to start browsing');
    }
}

checkAge();

// ****************task 4*******************
// Створіть клас MonthException, конструктор якого приймає параметр message 
// і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month),
// в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця.
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number

function showMonthName(month) {
    const monthNames = ["", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

    if (month <= 0 || isNaN(month) || month > 12) {
        throw new MonthException('Incorrect month number')
    } else {

        return monthNames[month]
    }
}

class MonthException {

    constructor(message) {
        this.message = message
        this.name = 'MonthException'

    }
}

try {
    console.log(showMonthName(15))

}
catch (exception) {
    console.log(exception.name + "! " + exception.message)
}


// ******************task 5******************

// Реалізуйте функцію showUser(id),
// яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, 
// в разі виключної ситуації виводить повідомлення про помилку.
// Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(userId) {

    if (userId < 0) {
        throw new Error("ID must not be negative!")
    } else if (isNaN(userId)) {
        throw new Error("ID must be a number!")
    } else {

        return {
            id: userId
        }
    }
}

function showUsers(ids) {
    let arrayIds = [];

    for (let i = 0; i < ids.length; i++) {
        try {
            let elem = showUser(ids[i])
            arrayIds.push(elem)
        } catch (exception) {
            alert(exception.name + "! " + exception.message)
        }

    }

    return arrayIds
}

console.log(showUsers([7, -12, 44, 22]))