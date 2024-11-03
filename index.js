const btn = document.getElementById("add-btn");
// const input = document.getElementById("task-input");
const taskList = document.getElementById('task-list');
let input = document.getElementById("task-input");


let task_array = JSON.parse(localStorage.getItem('Tasks')) || [];


btn.addEventListener("click", function get_task(e){
    e.preventDefault();

    const new_task = addTask_toArray(
        input.value);

    createTask(new_task)
})



function addTask_toArray(task){
    task_array.push(task);
    
    localStorage.setItem("Tasks", JSON.stringify(task_array));

    return task;
}


function createTask(task){

    const taskDiv = document.createElement("div");
    const task_Self = document.createElement("p");
    const delete_button = document.createElement("button");
    const edit_button = document.createElement("button");

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; // Set the type to checkbox


    delete_button.addEventListener("click", function(item){
        taskDiv.remove();
        deleteByValue(task);

    })

    edit_button.addEventListener("click", function(){

        const task_Self = prompt("whats your new task",task);

        // var task_1;
        // task_Self.innerHTML = "Hahahah";
        const task_Index = task_array.indexOf(task);
        task_array[task_Index] = task_Self;
        console.log(task_array[task_Index])
        console.log(task_Index); // Output: 1
        localStorage.setItem('Tasks', JSON.stringify(task_array));
        console.log('Updated local storage:', task_array);
    })

    task_Self.innerHTML = "Task : " + task;
    delete_button.innerHTML = "&#128473;";
    edit_button.innerHTML = "<b><strong>&#9999</strong></b>"
    taskDiv.append(task_Self,checkbox,delete_button,edit_button);
    taskList.appendChild(taskDiv);
    input.value = ""
}
task_array.forEach(createTask);

// task_array.forEach(createTask);
const saveTask = () =>{
    localStorage.setItem('Tasks', JSON.stringify(task_array));
}



function deleteByValue(value) {
    // Filter out the item with the specified value
    task_array = task_array.filter(item => item !== value);
    
    // Update local storage
    localStorage.setItem('Tasks', JSON.stringify(task_array));
    console.log('Updated local storage:', task_array);
}