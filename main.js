

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
    createTasks();
}

// create Tasks
let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += `
            <div id=${y}> 
                <span class="fw-bold">${x.text}</span>
                <span class="small text-secondary">${x.date}</span>
                <p>${x.description}</p>
        
                <span class="options">
                <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
                </span>
            </div>
        `) 
    });
    resetForm();
}

// Form Reset 
let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

// Delete Task 
let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
};