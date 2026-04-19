console.log("Hello World!");

let body = document.querySelector("body");
let addTaskButton = document.querySelector("#addTaskButton");
let taskCollections = document.querySelector("#collection-tasks");
let columns = document.querySelectorAll(".column");
let draggedTask = null;
let isDragging = false;


addTaskButton.addEventListener('click',function() {
    let textbox = document.createElement("textarea");
    textbox.type = "text";

    let newTask = document.createElement( "div" ) ;
    newTask.className = "task";
    newTask.innerText = "Task";
    newTask.draggable = true;
    newTask.appendChild(textbox);
    newTask.addEventListener("dragstart", dragstartHandler);

	taskCollections.appendChild( newTask ) ;
})

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