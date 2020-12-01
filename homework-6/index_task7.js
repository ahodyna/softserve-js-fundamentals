let body = document.getElementsByTagName('body');

console.log(body)
let main = document.createElement('main');
main.className = 'mainClass';
document.body.appendChild(main)

let div = document.createElement('div');
div.id = 'myDiv'
main.appendChild(div)

let p = document.createElement('p')
let text = document.createTextNode("First paragraph")
p.appendChild(text)
div.appendChild(p)