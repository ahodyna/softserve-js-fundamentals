// task 2

console.log('Hodyna');

// task 3

let userName;
let adminName;

userName = "Olena";
adminName = "Olha";

alert(userName);
alert(adminName);

adminName = userName;
alert(adminName);
alert(userName);

//task 4

const user = {
    name: "Olena",
    surname: undefined,
    age: 20,
    hasPet: true,
    isStudent: null
}

// task 5

const isAdult = confirm("Are you 18 years old?");
console.log(isAdult);

// task 6
const name = "Alina";            //String;
const surname = "Hodyna";        //String
const group = "Lv-548.JS Core";  //String
const yearOfBirth = 1996;        //Number;
const isMarried = false;         //Boolean

console.log(yearOfBirth);
console.log(isMarried);
console.log(name);
console.log(surname);
console.log(group);

let userId = undefined;
let userStatus = null;

console.log(typeof userId);
console.log(typeof userStatus);

// task 7

const login = prompt("Enter your login", "login");
const email = prompt("Enter your email", "email");
const password = prompt("Enter your password", "***");

alert(`Dear ${login}, your email is ${email}, your password is ${password}`);

// task 8

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInMonth = 30;

const secondsInHour = secondsInMinute * minutesInHour;
alert(`Seconds in hour ${secondsInHour}!`);

const secondsInDay = secondsInHour * hoursInDay;
alert(`Seconds in day ${secondsInDay}!`);

const secondsInMonth = secondsInDay * daysInMonth;
alert(`Seconds in month ${secondsInMonth}!`);
