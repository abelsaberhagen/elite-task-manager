console.log("Hello World!");

let body = document.querySelector("body");
let addTaskButton = document.querySelector("#addTaskButton");
let taskCollections = document.querySelector("#collection-tasks");
let column = document.querySelector(".column");

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
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
}

foreach =>
column.addEventListener("dragover", (ev) => {
    ev.preventDefault();
})

column.addEventListener("drop", (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    ev.column.append(data);
})


const task = {name:"task 1", title:"Task1"}