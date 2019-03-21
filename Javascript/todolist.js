const listInput = document.querySelector('.input');
const button = document.querySelector('.btn');
const ul = document.querySelector('.ul-list');

button.addEventListener('click', addToList);

function addToList(){
    const li = document.createElement('li');
    ul.appendChild(li);
    
    li.innerText = listInput.value;
    listInput.value ='';
    li.style.color ='white';
}
