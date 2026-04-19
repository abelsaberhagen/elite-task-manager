console.log("Hello World!");

let body = document.querySelector("body");
let addTaskButton = document.querySelector("#addTaskButton");
let taskCollections = document.querySelector("#collection-tasks");
let columns = document.querySelectorAll(".column");
let draggedTask = null;
let isDragging = false;

addTaskButton.addEventListener('click',function() {
    let newTask = document.createElement( "div" ) ;
    newTask.className = "task";
    newTask.innerText = "Task";
    newTask.draggable = true;
    newTask.addEventListener("dragstart", dragstartHandler);

	taskCollections.appendChild( newTask ) ;
})

function dragstartHandler(ev) {
    //ev.dataTransfer.items.add(ev.column.innerText, "text/plain");
    console.log(ev.target.outerHTML);
    draggedTask = ev.target;
    console.log("drag started");
}


columns.forEach((column) => {
    column.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    console.log("drag over");
    
    

    column.addEventListener("mouseenter", () => {
        if (draggedTask != null) {
            column.classList.add("drag-active-hover");
        }
    });
    column.addEventListener("mouseleave", () => {
        if (draggedTask == null) {
            column.classList.remove("drag-active-hover");
        }
    });
    
    column.addEventListener("drop", (ev) => {
    ev.preventDefault();
    ev.target.appendChild(draggedTask);
    draggedTask = null;
    });

    
});


const task = {name:"task 1", title:"Task1"}