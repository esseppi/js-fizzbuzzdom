const body = document.querySelector('body')
body.className = "bg-dark"
const header = document.createElement('header')
header.style.textAlign = 'center'
header.style.color = 'white'
header.style.fontSize = '3rem'
body.append(header)
header.append('FizzBuzzDom')

const main = document.createElement('main')
body.append(main)
main.classList.add('container')
main.style.margin = "auto"
main.style.width = "80%"



const row = document.createElement('div')
main.append(row)
row.className = "d-flex flex-row flex-wrap justify-content-around"

for (let i = 1; i <= 100; i++) {
    let fizz = `<div class="box d-flex rounded rounded-4 bg-success justify-content-center align-items-center">fizz</div>`
    let buzz = `<div class="box d-flex rounded rounded-4 bg-warning justify-content-center align-items-center">buzz</div>`;
    let fizzbuzz = `<div class="box d-flex bg-danger justify-content-center align-items-center">fizzbuzz</div>`;

if (i % 3 == 0 && i % 5 == 0) {
    element = fizzbuzz;
    row.innerHTML += element;
    }
else if (i % 5 == 0) {
 element = buzz;
 row.innerHTML += element;
} else if (i % 3 == 0) {
    element = fizz
    row.innerHTML += element;
} else {
element = `<div class="box d-flex rounded rounded-4 justify-content-center align-items-center">${i}</div>`;
row.innerHTML += element;}
}

