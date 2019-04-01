const listInput = document.querySelector('.input');
const button = document.querySelector('.btn');
const ul = document.querySelector('.ul-list');
// const resetButton = document.querySelector('.re-btn');

button.addEventListener('click', addToList);

function addToList(){
    const li = document.createElement('li');
    ul.appendChild(li);
    if (ul.childNodes.length === 6){
        ul.innerHTML = '';
    }
    li.innerText = listInput.value;
    listInput.value ='';
    li.style.color ='white';
}
// resetButton.addEventListener('click', clearList);
// function clearList(){
//     // window.confirm("Are you sure?");
//     if (ul.childNodes.length === 5){
//         ul.innerHTML = '';
//     }
// }
//////////////* color button*///////////////

const colors = ['red','green','blue','orange','yellow'];
let currentColor = 0;

const colorButton = document.querySelector('.color-button');

colorButton.addEventListener('click',changeColor );
function changeColor(){
    setTimeout( ()=>{
        colorButton.style.backgroundColor = colors[currentColor];
        currentColor++;
        if (currentColor >= colors.length){
            currentColor = 0;
        }
    },10);
}

