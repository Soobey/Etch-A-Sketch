let n = 16;
//create stanard grid, which is there from the start
createGrid(n)

function prom() {
    //delete the last grid
    const grid = document.getElementById('grid')
    grid.remove();
    //Ask user after the size of the grid
    var x = prompt('How big should the grid be?');
    if (x <= 100 && x >= 1) {
        createGrid(x);
    }
    else {
        alert('Your number is to high or to low (over 100 or under 1). Please try another number!');
        prom();
    }
}

function createGrid(size) {
    var grid1 = document.createElement('div');
    document.body.appendChild(grid1);
    grid1.setAttribute('id', 'grid');

    const grid = document.querySelector('#grid');
    grid.setAttribute('style', 'border: solid black 1px; display: flex; max-width: 800px; flex-wrap: wrap;')

    let mousepress = false;
    for (let i = 0; i < size**2; i++) {
        var div = document.createElement('div');
        grid.appendChild(div);

        //determines whether the mouse is clicked or not
        div.addEventListener('mousedown', () => mousepress = true);
        div.addEventListener('mouseup', () => mousepress = false);

        //draws if you click on a square
        div.addEventListener('click', (e) => {
            e.target.style.backgroundColor = 'black';
        });

        div.addEventListener('mousemove', (e) => {
            //only draws if the mouse is pressed
            if (mousepress === true) {
                e.target.style.backgroundColor = 'black';
            }
        });
        //makes the squares fit perfectly in the big square
        div.style.width = 800/size + 'px';
        div.style.height = 800/size + 'px';
    };
}
