console.log("Hello World!");

let body = document.getElementById("body");
let addTaskButton = document.getElementById("addTaskButton");

DivObject = function() {
	    this.div = document.createElement( "div" ) ;
	    document.body.appendChild( this.div ) ;
}


const task = {name:"task 1", title:"Task1"}