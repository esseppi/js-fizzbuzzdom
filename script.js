const main = document.querySelector('main')
main.classList.add('container')
main.style.margin = "auto"
main.style.width = "80%"

const row = document.createElement('div')
main.append(row)
row.className = "d-flex flex-row flex-wrap justify-content-around"



for (let i = 1; i <= 100; i++) {
    let fizz = 'fizz'
    let buzz = 'buzz'
    let fizzbuzz = fizz + buzz;
if (i % 3 == 0) {
element = `<div class="box d-flex bg-success justify-content-center align-items-center">${fizz}</div>`;
row.innerHTML += element;
} else if (i % 5 == 0) {
element = `<div class="box d-flex bg-warning justify-content-center align-items-center">${buzz}</div>`;
row.innerHTML += element;
} else if (i % 5 && i % 3 == 0) {
element = `<div class="box d-flex bg-danger justify-content-center align-items-center">${fizzbuzz}</div>`;
row.innerHTML += element;
} else {
element = `<div class="box d-flex justify-content-center align-items-center">${i}</div>`;
row.innerHTML += element;}
}

