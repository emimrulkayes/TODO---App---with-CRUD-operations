

// select id's 
let addNew = document.getElementById('addNew');
let form = document.getElementById('form');
let tasks = document.getElementById('tasks');
let textInput = document.getElementById('textInput');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let msg = document.getElementById('msg');
let add = document.getElementById('add');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if(textInput.value === "") {
        console.log(failore);
        msg.innerHTML = 'Please input your tasks';
    }else {
        console.log('Success');
        msg.innerHTML = "";
    }
}
