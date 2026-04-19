console.log("Hello World!");

let body = document.querySelector("body");
let addTaskButton = document.querySelector("#addTaskButton");
let taskCollections = document.querySelector("#collection-tasks");
let columns = document.querySelectorAll(".column");
let draggedTask = null;
let isDragging = false;
const colors = ["pink", "orange", "yellow", "green", "purple"];


addTaskButton.addEventListener('click',function() {
    let textbox = document.createElement("textarea");
    textbox.type = "text";

    let penImg = document.createElement("img");
    penImg.src = "pen.png";
    let editButton = document.createElement("button");
    editButton.appendChild(penImg);

    let newTask = document.createElement( "div" ) ;
    newTask.className = "task";
    newTask.innerText = "Task";
    newTask.draggable = true;
    newTask.appendChild(editButton);
    newTask.appendChild(textbox);

    editButton.addEventListener("click", editButtonPress(newTask));
    newTask.addEventListener("dragstart", dragstartHandler);

	taskCollections.appendChild( newTask ) ;
})

function editButtonPress(task) {
    let colorButtonCollection = document.createElement("div");
    for (let i = 0; i < 5; i++) {
        let button = document.createElement("button"); 
        button.classList.add(colors[i]);
        button.addEventListener("click", () => {changeColorOfTask(task, colors[i])});
        colorButtonCollection.appendChild(button);
    }
    task.appendChild(colorButtonCollection);
    
}

function changeColorOfTask(task, colorClass) {
    for (let i = 0; i < 5; i++) {
        task.classList.remove(colors[i]);
    }
    task.classList.add(colorClass); 
}

function dragstartHandler(ev) {
    //ev.dataTransfer.items.add(ev.column.innerText, "text/plain");
    console.log(ev.currentTarget.outerHTML);
    draggedTask = ev.currentTarget;
    isDragging = true;
    console.log("drag started");
    console.log(draggedTask);
}


columns.forEach((column) => {

    column.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        console.log("drag over");

        if (isDragging) {
            column.classList.add("drag-active-hover");
        }
    });
    column.addEventListener("dragleave", (ev) => {
        ev.preventDefault();
        column.classList.remove("drag-active-hover");
    })

    //column.addEventListener("dragLea")
    
    column.addEventListener("drop", (ev) => {
        ev.preventDefault();
        ev.currentTarget.appendChild(draggedTask);
        draggedTask = null;
        column.classList.remove("drag-active-hover");
        console.log(draggedTask);
    });

    
});


const task = {name:"task 1", title:"Task1"};