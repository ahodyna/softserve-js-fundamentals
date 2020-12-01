// *************************task 1*****************************

// option 1
document.getElementById('test').innerHTML = 'Last';

// option 2
document.getElementsByTagName('div')[0].innerHTML = 'Last';

// ************************task 2******************************

document.getElementsByClassName('image').src = 'cat.jpg';
const newImage = document.getElementsByClassName('image').src;
alert(newImage);

// **********************task 3********************************

let paragraphsNodes = document.querySelectorAll('div > p')
paragraphsNodes.forEach((element, i) => console.log('Selector text '+ i + ':' + element.innerHTML) )

// *********************task 4*********************************

// option 1
let elem = document.getElementById('list');

alert(elem.firstElementChild.innerHTML);
alert(elem.lastElementChild.innerHTML);
alert(elem.firstElementChild.nextElementSibling.innerHTML);
alert(elem.lastElementChild.previousElementSibling.innerHTML);
alert(elem.firstElementChild.nextElementSibling.nextElementSibling.innerHTML);

//option 2
let parent = document.querySelector('#list');
let elems = parent.children;

alert(elems[0].innerHTML);
alert(elems[4].innerHTML);
alert(elems[1].innerHTML);
alert(elems[3].innerHTML);
alert(elems[2].innerHTML);


// ********************task 5*********************************

document.getElementsByTagName('h1')[0].style.backgroundColor = 'LawnGreen'
document.getElementById('myDiv').firstElementChild.style.fontWeight = 'bold'
document.getElementById('myDiv').firstElementChild.nextElementSibling.style.color = 'red'
document.getElementById('myDiv').lastElementChild.style.fontStyle = 'italic'
document.getElementById('myDiv').lastElementChild.previousElementSibling.style.textDecoration = 'underline'
document.getElementById('myList').style = 'display:flex; list-style-type: none;'
document.getElementsByTagName('span')[0].style.opacity = '0.0'

// ********************task 6********************************
let input1 = document.getElementById('input1') 
input1.value = prompt('Text 1: ')

let input2 = document.getElementById('input2')
input2.value = prompt('Text 2: ')

let input1Value = input1.value

 document.getElementById('input1').value = input2.value
 input2.value = input1Value