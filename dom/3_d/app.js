console.log(document.getElementsByClassName('box2'))

const one = document.getElementById('box2')
console.log(one)

one.innerText = "iammainak"
document.appendChild(one)

const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);
console.log(parent.children[1]);

const oneDay = document.querySelector('.day')
console.log(oneDay);
console.log(oneDay.parentElement);
console.log(oneDay.nextElementSibling);

const parent = document.querySelector('.parent')
// console.log(parent.nextElementSibling)
console.log(parent.childNodes)