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
function checkEmail(email){
    if(/^.*$/.test(email)){
        console.log('true')   
    }else{
        console.log('false')
    }
}

checkEmail("Qmail2@gmail.com")

//**************************task 3*******************************

$('.head').css('background-color', 'green');
$('.inner').css('font-size', '35px')


//**************************task 4******************************

function checkSelectedInput() {
  let  tagInputCheked = document.querySelectorAll('input:checked')
    if (tagInputCheked.length == 3) {
        document.querySelectorAll('input').forEach(elem => elem.disabled=true);
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

//***************************task 7***************************

function checkEmailAddress(str){
    if (/^[a-zA-Z0-9]+[\w]*-?[\w]*@[a-z]+\.[a-z]+$/.test(str)){
        console.log('Email is correct!')
    } else{
        console.log('Email is not correct!')
    }
}

checkEmailAddress('my_mail@gmail.com');
checkEmailAddress('#my_mail@gmail.com');