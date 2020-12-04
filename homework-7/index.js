// *************************task 1***************************

let newWindow = window.open('', 'localhistory', 'width=300, height=300')


setTimeout(() => {
    newWindow.resizeTo('500', '500')

    setTimeout(() => {
        newWindow.moveTo(200, 200)

        setTimeout(() => {
            newWindow.close()
        }, 2000);


    }, 2000);

}, 2000);


// *************************task 2***************************
function changeCSS() {
    let tagP = document.getElementById('text');
    tagP.style.color = 'orange';
    tagP.style.fontSize = '20';
    tagP.style.fontFamily = 'Comic Sans MS';
}

let button = document.getElementById('elem')
button.addEventListener("click", changeCSS)

// ***************************task 3***************************
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let linkElem = document.getElementById('link');

button1.addEventListener("click", () => document.body.style.backgroundColor = 'blue');
button2.addEventListener("dblclick", () => document.body.style.backgroundColor = 'pink')
button3.addEventListener("mousedown", () => document.body.style.backgroundColor = 'brown');
button3.addEventListener("mouseup", () => document.body.style.backgroundColor = 'white');
linkElem.addEventListener("mouseover", () => document.body.style.backgroundColor = 'yellow');
linkElem.addEventListener("mouseout", () => document.body.style.backgroundColor = 'white');

// *************************task 4**************************

let buttonDelete = document.getElementById('chooseAndDelete');

buttonDelete.addEventListener('click', () => document.querySelector('#listOfName option:checked').remove() )

// **********************task 5******************************


let liveButtonMassageElement = document.getElementById('liveButtonMassage');
let button5Task = document.getElementById('liveButton');

button5Task.addEventListener('mouseover', () => {
    let messageContainer = document.createElement('div')
    let textNodeMouseOver = document.createTextNode('Mouse on me!')
    messageContainer.appendChild(textNodeMouseOver)
    liveButtonMassageElement.appendChild(messageContainer)
})

button5Task.addEventListener('mouseout', () =>{
    let messageContainer = document.createElement('div')
    let textNodeMouseOut = document.createTextNode('Mouse is not on me!')
    messageContainer.appendChild(textNodeMouseOut)
    liveButtonMassageElement.appendChild(messageContainer)
})

button5Task.addEventListener('click', () =>{
    let messageContainer = document.createElement('div')
    let textNodeButtonOnclick = document.createTextNode('I was pressed!')
    messageContainer.appendChild(textNodeButtonOnclick)
    liveButtonMassageElement.appendChild(messageContainer)
})

// *************************task 6*****************************
function changeWindowSize(){

    let widthScreen = window.innerWidth;
    let heightScreen = window.innerHeight;

    document.getElementById("resultWidthAndHeight").innerHTML = "Width: " + widthScreen + ", " + "Height: " + heightScreen ;
}
window.addEventListener('resize', changeWindowSize)


// ************************task 7****************************
let country = [
    {
        name: 'Germany',
        city: ['Berlin', 'Dortmund', ' Hamburg', 'Dresden'],
    },
    {
        name: 'Ukraine',
        city: ['Kyiv', 'Lviv', 'Ternopil', 'Chernihiv']
    },
    {
        name: 'USA',
        city: ['New-York', 'Washington', 'Boston', 'Chikago']
    }
]


function onCountryChange() {
    const selectCountry = document.getElementById('country');
    const selectCities = document.getElementById('cities');
    
    let selectedCountry = selectCountry.options[selectCountry.selectedIndex].text

    for (let i = 0; i < country.length; i++) {

        if (selectedCountry == country[i].name) {
            selectCities.options.length = 0

            let city = country[i].city

            for (let j = 0; j < city.length; j++) {
                let optionElement = document.createElement('option')
                let optionElementText = document.createTextNode(city[j])
                optionElement.appendChild(optionElementText)
                selectCities.appendChild(optionElement)
            }

        }

    }

    printSelectedCountryAndCity()
}

document.getElementById('country').addEventListener('change', onCountryChange);
document.getElementById('cities').addEventListener('change', onCityChange);


function onCityChange() {
    printSelectedCountryAndCity()
}


function printSelectedCountryAndCity() {
    const selectCountry = document.getElementById('country');
    const selectCities = document.getElementById('cities');

    const selectedCity = selectCities.options[selectCities.selectedIndex].text;
    const selectedCountry = selectCountry.options[selectCountry.selectedIndex].text
    
    document.getElementById('selectedCountryAndCity').innerHTML = selectedCountry + ', ' + selectedCity
}


