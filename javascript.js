const grid = document.querySelector('#grid');
let x = 16;

for (let i = 0; i < x**2; i++) {
    var div = document.createElement('div');
    //div.classList.add('pixel');
    grid.appendChild(div)
}