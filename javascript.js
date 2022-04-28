const grid = document.querySelector('#grid');
let n = 16;

for (let i = 0; i < n**2; i++) {
    var div = document.createElement('div');
    grid.appendChild(div);
    div.addEventListener('mousemove', (e) => {
        e.target.style.backgroundColor = 'black';
    });
};