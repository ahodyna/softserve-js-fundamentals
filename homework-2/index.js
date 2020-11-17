// task 1

let x = 1;
let y = 2;

let res1 = String(x) + String(y) 
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = String (Boolean(x) + String(y)) 
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y) 
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x + y + NaN  
console.log(res4); // NaN
console.log(typeof res4); // "number"


// task 2

const number = prompt("Enter number ")
if (number % 7 == 0 && number % 2 == 0 && number > 0) {
    console.log('true')
} else {
    console.log('false')
}

// task 3

const arr = [];
arr[0] = 1;
arr[1] = "Kyiv";
arr[2] = true;
arr[3] = null;
alert("Array length : " + arr.length);
arr[4] = prompt("Enter number");
alert("Array[4] : " + arr[4]);
arr.shift();
alert("Array : " + arr);

//task 4

let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join('*'))

//task 5

const isAdult = prompt("Введіть Ваш вік")
if (isAdult >= 18) {
    alert(`Ваш вік - ${isAdult}! Ви досягли повнолітнього віку!`)
} else if (isAdult <= 17 && isAdult >= 10) {
    alert(`Ваш вік - ${isAdult}! Ви  ще не досягли повнолітнього віку!`)
} else {
    alert(`Ваш вік - ${isAdult}! Ви ще надто молоді!`)
}

// task 6
function validateSide(data) {
    if (isNaN(data) || data < 0) {
        return 'Incorrect data'
    } else {
        return null;
    }
}

let error = null;
let sideA, sideB, sideC = null;

if (error == null) {
    let a = prompt("Сторона 1 : ");
    sideA = Number(a);
    error = validateSide(sideA);
}

if (error == null) {
    let b = prompt("Сторона 2 : ");
    sideB = Number(b);
    error = validateSide(sideB);
}

if (error == null) {
    let c = prompt("Сторона 3 : ");
    sideC = Number(c);
    error = validateSide(sideC);
}

function highestNumber (sideA, sideB, sideC){
    if(sideA > sideB && sideA > sideC){
         return sideA;
    }else if (sideB > sideA && sideB > sideC){
        return sideB;
    }else{
        return sideC;
    } 
}

if (error == null) {
    let p = (sideA + sideB + sideC) / 2;
    let areaOfTriangle = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
    let fixedAreaOfTriangle = areaOfTriangle.toFixed(3);
    let areaOfTriangleNumber = parseFloat(fixedAreaOfTriangle);
    console.log("The area of the triangle: " + areaOfTriangleNumber)

    
    let hypotenuse = highestNumber (sideA, sideB, sideC);
    let sides = [sideA, sideB, sideC]
    let cathets = sides.filter(side => side != hypotenuse);


    if ( hypotenuse ** 2 == cathets[0] ** 2 + cathets[1] ** 2) {
        console.log("Цей трикутник є прямокутним")
    } else {
        console.log("Цей трикутник не є прямокутним")
    }
}

if (error) {
    alert(error)
}


//task 7

let today = new Date()
let currentHour = today.getHours();

//option 1

if (currentHour >= 23 || currentHour < 5) {
    alert('Доброї ночі');
} else if (currentHour >= 5 && currentHour < 11) {
    alert('Доброго ранку');
} else if (currentHour >= 11 && currentHour < 17) {
    alert('Доброго дня');
} else if (currentHour >= 17 && currentHour < 23){
  alert('Доброго вечора');  
}else{
    ('Помилка!');
}
    

//option 2

switch (currentHour) {
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        alert('Доброї ночі');
        break;

    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert('Доброго ранку');
        break;

    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        alert('Доброго дня');
        break;
    
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        alert('Доброго вечора');
        break;

    default:
        alert('Помилка!');

}

//option 3

switch (true) {
    case currentHour < 5 || currentHour >= 23:
        alert('Доброї ночі');
        break;

    case currentHour < 11:
        alert('Доброго ранку');
        break;

    case currentHour < 17:
        alert('Доброго дня');
        break;

    case currentHour < 23:
        alert('Доброго вечора');
        break;

    default:
        alert('Помилка!');
}