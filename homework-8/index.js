// ***************************task 1****************************

function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
        console.log("String's starts with uppercase character")
    } else {
        console.log("String's not starts with uppercase character ")
    }
}
upperCase('regexp')
upperCase('Regexp')
upperCase('geRExp')

// **************************task 2******************************
function checkEmail(email) {
    if (/^.*$/.test(email)) {
        console.log('true')
    } else {
        console.log('false')
    }
}

checkEmail("Qmail2@gmail.com")

//**************************task 3a*******************************

$('.head').css('background-color', 'green');
$('.inner').css('font-size', '35px')

// ************************task 3b*******************************

let str1 = "cdbBdbsbz";

let resultArr = str1.match(/d(b+)(d)/i)

console.log(resultArr)

//**************************task 4******************************

function checkSelectedInput() {
    let tagInputCheked = document.querySelectorAll('input:checked')
    if (tagInputCheked.length == 3) {
        document.querySelectorAll('input').forEach(elem => elem.disabled = true);
    }
}


//**************************task 5*****************************

let str = "Java Script"
let swapWords = str.replace(/(\w+) (\w+)/i, '$2, $1')

console.log(swapWords)


//**************************task 6****************************

function checkCreditCard(number) {
    if (/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/.test(number)) {
        console.log("Number card is correct")
    } else {
        console.log("Number card isn't correct")
    }
}

checkCreditCard("9999-9999-9999-9999")

//***************************task 7a***************************

function checkEmailAddress(str) {
    if (/^[a-zA-Z0-9]+[\w]*-?[\w]*@[a-z]+\.[a-z]+$/.test(str)) {
        console.log('Email is correct!')
    } else {
        console.log('Email is not correct!')
    }
}

checkEmailAddress('my_mail@gmail.com');
checkEmailAddress('#my_mail@gmail.com');

//*********************************task 7b************************

function checkLogin(str) {
    let validLogin = str.length > 2
        && str.length < 10
        && /^[a-zA-Z][a-zA-Z0-9.]+$/.test(str);
    console.log(validLogin)

    let numbersArr = str.match(/[\d.]+/g);
    if (numbersArr != null) {
        console.log(numbersArr.map(str => Number(str)))
    }

}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');