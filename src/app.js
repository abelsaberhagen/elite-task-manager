console.log("Hello World!");

let body = document.getElementById("body");
let addTaskButton = document.getElementById("addTaskButton");
let taskCollections = document.getElementById("collection-tasks")

addTaskButton.addEventListener('click',function() {
    this.div = document.createElement( "div" ) ;
    this.div.className = "task";
	document.taskCollections.appendChild( this.div ) ;
})




const task = {name:"task 1", title:"Task1"}