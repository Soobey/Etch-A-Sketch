let n = 0;

function prom() {
    var x = prompt('How big should the grid be?');
    if (x <= 100) {
        createGrid(x);
    }
    else {
        alert('Your number is to high (over 100). Please try a lower one!');
        prom();
    }
}

function createGrid(n) {
    const grid = document.querySelector('#grid');
    grid.setAttribute('style', 'border: solid black 1px; display: flex; max-width: 1000px; flex-wrap: wrap;')

    for (let i = 0; i < n**2; i++) {
        var div = document.createElement('div');
        grid.appendChild(div);
        div.addEventListener('mousemove', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        div.style.width = 1000/n + 'px';
        div.style.height = 1000/n + 'px';
    };
}
