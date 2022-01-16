const container = document.querySelector('#container');
let size = 16
let color = 'black'

function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size; i++){
        for(let j =0; j < size; j++){
            const squares = document.createElement('div');
            squares.setAttribute('class', 'square');
            squares.addEventListener('mouseover', () =>{ squares.style.backgroundColor = color}) 
            container.appendChild(squares);

        }
    }

}
createGrid(size);

const buttonClear = document.querySelector('.clear-all');
const buttonrase = document.querySelector('.rase')
const buttonRGB = document.querySelector('.rgb');
const buttonBlack = document.querySelector('.black');



buttonClear.addEventListener('click', () =>{
    clearGrid();
})
/*
buttonrase.addEventListener('click', () => {
    color = 'white'
})

buttonRGB.addEventListener('click', () => {
   color = randomColor;
   
})

buttonBlack.addEventListener('click', () =>{
    color = 'black'
    
})
*/
function clearGrid(){
    const boxes = document.querySelectorAll('.square');
    boxes.forEach(box => {box.remove() });
    colorBlack();
    size = getUserInput();
    createGrid(size);
}

function getUserInput(){
    size = prompt('enter a desired grid size between 10 and 100');
    if(size >=10 && size < 100){
     return size;
    }else{
       size = prompt('Enter a valid number');
    }
    return size;
}


/*
function erease(){
   color = 'white';
}

function colorBlack(){
    color = 'Black';
}

function randomColor(){
    let r = () => Math.floor(Math.random() * 256);
    let color = `rgb(${r()}, ${r()}, ${r()})`
    return color
}

*/

