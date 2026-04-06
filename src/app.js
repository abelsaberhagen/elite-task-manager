console.log("Hello World!");

let body = document.getElementById("body");
let addTaskButton = document.getElementById("addTaskButton");
let taskCollections = document.getElementById("collection-tasks");

addTaskButton.addEventListener('click',function() {
    let newTask = document.createElement( "div" ) ;
    newTask.className = "task";
	document.taskCollections.appendChild( newTask ) ;
})




const task = {name:"task 1", title:"Task1"}