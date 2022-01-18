const container = document.querySelector('#container');
let size = 16;
let color = 'black';
window.onload = createGrid(size);

function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
     container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
   
    for(let i = 0; i < size; i++){
        for(let j =0; j < size; j++){
            const squares = document.createElement('div');
            squares.setAttribute('class', 'square');
            squares.addEventListener('mouseover', () =>{ squares.style.backgroundColor = color});
            container.appendChild(squares);
        }
    }
    getColor();
}

const buttonClear = document.querySelector('.clear-all');
buttonClear.addEventListener('click', () =>{
    clearGrid();
})

function clearGrid(){
    const boxes = document.querySelectorAll('.square');
    boxes.forEach(box => {box.remove() });
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

function getColor(){                                        // Checks wich color button is clicked and sets color accordingly.
    const buttonWhite = document.querySelector('.white');
    const buttonBlack = document.querySelector('.black');
    const buttonRGB = document.querySelector('.rgb');
    const boxes = document.querySelectorAll('.square');

    buttonWhite.addEventListener('click',()=>{
        boxes.forEach(box => {
            box.addEventListener('mouseover', ()=>{
                box.style.backgroundColor = 'white';
            })
        })
    })
    
    buttonRGB.addEventListener('click', () => {
        boxes.forEach(box => {
            box.addEventListener('mouseover', ()=>{
                box.style.backgroundColor = getrandomColor();
            })
        })
       
    })
    
    buttonBlack.addEventListener('click', () =>{
        boxes.forEach(box => {
            box.addEventListener('mouseover', ()=>{
                box.style.backgroundColor ='black';
            })
        }) 
    })
}
function getrandomColor(){                      
    let r = () => Math.floor(Math.random() * 256);
    let color = `rgb(${r()}, ${r()}, ${r()})`;
    return color;
}