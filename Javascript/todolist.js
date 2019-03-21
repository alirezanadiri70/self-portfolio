const listInput = document.querySelector('.input');
const button = document.querySelector('.btn');
const ul = document.querySelector('.ul-list');
const resetButton = document.querySelector('.re-btn');
// const li = document.querySelector('.demo')
button.addEventListener('click', addToList);

function addToList(){
    const li = document.createElement('li');
    ul.appendChild(li);
    if (li.length === 10){
        li.innerHTML = '';
        console.log(li.length)
    }
    li.innerText = listInput.value;
    listInput.value ='';
    li.style.color ='white';
}
// resetButton.addEventListener('click', clearList);
// function clearList(){
//     // window.confirm("Are you sure?");
//     if (li.length === 1){
//        console.log(li)
//     }
        