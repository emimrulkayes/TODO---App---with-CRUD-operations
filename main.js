

// select id's 
let addNew = document.getElementById('addNew');
let form = document.getElementById('form');
let tasks = document.getElementById('tasks');
let textInput = document.getElementById('textInput');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let msg = document.getElementById('msg');
let add = document.getElementById('add');

// Input Form Validation 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if(textInput.value === "") {
        console.log('failure');
        msg.innerHTML = 'Please input tasks name.';
    }else {
        console.log('Success');
        msg.innerHTML = "";
        // collect data and Close Modal 
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (() => { add.setAttribute("data-bs-dismiss", ""); })();
    }
}

// collect data and use local storage
let data = [];
let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
}

