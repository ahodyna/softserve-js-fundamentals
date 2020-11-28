// *********************task 1 ******************

// Напишіть функцію propsCount(currentObject),
//  яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад для об’єкта
// let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// Результат має бути 3.
// propsCount(mentor);  // 3

function propsCount(currentObject) {
    let count = null

    for (let key in currentObject) {
        if (currentObject.hasOwnProperty(key)) {
            count++
        }
    }
    return count
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

console.log(propsCount(mentor))

// ***************************task 2*******************************

// Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), 
// яка приймає даний об’єкт і виводить список його властивостей записаних в масив.
// Виведіть також масив значень властивостей об’єкта.

let student = {
    name: "Kate",
    age: 23,
    course: "History",
    direction: "Politics of Memory",
    duration: 4,

}

function showProps(obj) {
    let arrProp = []
    let arrValue = []

    let objPropAndValue = {

    }

    for (let key in obj) {
        arrValue.push(obj[key])
        arrProp.push(key)
    }
    objPropAndValue.key = arrProp;
    objPropAndValue.value = arrValue

    return objPropAndValue
}
console.log(showProps(student))

// *******************task 3*********************

// Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(),
// який виводить ім’я і прізвище особи.
// Від класу Person наслідується клас Student,
// конструктор якого крім name і surname, приймає параметр year(рік вступу до університету).
// В класі Student необхідно перевизначити метод showFullName(midleName),
// щоб виводилося не лише ім’я, прізвище, але і по - батькові(midleName) студента.
// Також в класі Student необхідно реалізувати метод showCourse(),
// який виводитиме поточний курс студента(від 1 до 6).Значення курсу визначатиметься
// як різниця поточного року(визначити самостійно) і року вступу до ВУЗу year.

// Приклад результату:
// let stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 5

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }
    showFullName() {
        return this.surname + " " + this.name
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname)

        this.year = year
    }

    showFullName(midleName) {
        return super.showFullName() + " " + midleName

    }

    showCourse() {
        let currentYear = new Date().getFullYear();

        let currentCourse = null

        currentCourse = currentYear - this.year
        return currentCourse
    }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1)
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());


// *****************************task 4******************

// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: 
// fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
// 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника.
// Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
// 2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник 
// при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
// 3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 4) Вивести значення зарплати з новим experience.
// 5) Створити кілька екземплярів класу (працівників) з різними зарплатами.
// Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:  
//  worker_fullName: salary_value ………..
{

    class Worker {
        #experience = 1.2


        constructor(fullName, dayRate, workingDays) {
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays
        }

        showSalary() {
            let salary = null;

            salary = this.dayRate * this.workingDays
            return salary
        }



        showSalaryWithExperience() {

            let salaryWithExperience = null;

            salaryWithExperience = this.dayRate * this.workingDays * this.#experience

            return salaryWithExperience
        }
        get experience() {
            return this.#experience
        }
        set experience(value) {
            this.#experience = value
            return this.#experience
        }
    }

    let worker1 = new Worker("John Johnson", 20, 23);
    console.log(worker1.fullName);
    console.log(worker1.showSalary());
    console.log("New experience: " + worker1.experience);
    console.log(worker1.showSalaryWithExperience());
    worker1.experience = 1.5;
    console.log("New experience: " + worker1.experience);
    console.log(worker1.showSalaryWithExperience());

    let worker2 = new Worker("Tom Tomson", 48, 22);
    console.log(worker2.fullName);
    console.log(worker2.showSalary());
    console.log("New experience: " + worker2.experience);
    console.log(worker2.showSalaryWithExperience());
    worker2.experience = 1.5;
    console.log("New experience: " + worker2.experience);
    console.log(worker2.showSalaryWithExperience());


    let worker3 = new Worker("Andy Ander", 29, 23);
    console.log(worker3.fullName);
    console.log(worker3.showSalary());
    console.log("New experience: " + worker3.experience);
    console.log(worker1.showSalaryWithExperience());
    worker3.experience = 1.5;
    console.log("New experience: " + worker3.experience);
    console.log(worker3.showSalaryWithExperience());

    let workers = [
        worker1,
        worker2,
        worker3
    ]

   workers.sort((w1,w2) => {
       if (w1.showSalaryWithExperience() > w2.showSalaryWithExperience()){
           return 1
       }else{
           return -1
       }
   })
   
   console.log('Sorted by salary:')
   
   for(let i = 0; i < workers.length; i++){
    console.log(workers[i].fullName + ': ' + workers[i].showSalaryWithExperience())
   }

}

// **********************task 5**********************

// Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
// Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure.
// Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури. 
// В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
// Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, 
// перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури, 
// розраховану площу фігури та сумарну площу всіх фігур. 
// Для реалізації функції можете використати метод reduce().

{
    class GeometricFigure {
        getArea() {
            return 0;
        }
        toString() {
            return Object.getPrototypeOf(this).constructor.name;
        }
    }

    class Triangle extends GeometricFigure {

        constructor(side, hight) {
            super()
            this.side = side
            this.hight = hight
        }

        getArea() {
            return 0.5 * this.side * this.hight
        }
    }

    class Square extends GeometricFigure {
        constructor(side) {
            super()
            this.side = side
        }
        getArea() {
            return this.side * this.side
        }

    }


    class Circle extends GeometricFigure {
        constructor(radius) {
            super()
            this.radius = radius
        }

        getArea() {
            return Math.PI * Math.pow(this.radius, 2)
        }
    }

    function handleFigures(figures) {
        let totalAreaOfFigures = null

        for (let i = 0; i < figures.length; i++) {
            if (figures[i] instanceof GeometricFigure) {

                let area = figures[i].getArea()
                console.log('Geometric figure: ' + figures[i].toString() + ' - area: ' + area)
                totalAreaOfFigures += area
            }
        }

        return totalAreaOfFigures
    }

    const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
    console.log(handleFigures(figures));
}