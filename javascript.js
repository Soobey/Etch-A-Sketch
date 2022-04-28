const grid = document.querySelector('#grid');
let n = 100;

for (let i = 0; i < n**2; i++) {
    var div = document.createElement('div');
    grid.appendChild(div);
    div.addEventListener('mousemove', (e) => {
        e.target.style.backgroundColor = 'black';
    });
    div.style.width = (1000-n*2)/n + 'px';
    div.style.height = (1000-n*2)/n + 'px';
};