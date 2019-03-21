const listInput = document.querySelector('.input');
const button = document.querySelector('.btn');
const ul = document.querySelector('.ul-list');
const resetButton = document.querySelector('.re-btn');
// const li = document.querySelector('.demo')
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

        