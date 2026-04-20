console.log("Hello World!");

const body = document.querySelector("body") as HTMLElement;
const addTaskButton = document.querySelector("#addTaskButton") as HTMLElement;
const taskCollections = document.querySelector("#collection-tasks") as HTMLElement;
const columns = document.querySelectorAll<HTMLElement>(".column");
let draggedTask: HTMLElement | null = null;
let isDragging = false;
const colors: string[] = ["pink", "orange", "yellow", "green", "purple"];


addTaskButton.addEventListener('click', function() {
    const textbox = document.createElement("textarea");
    textbox.classList.add("orange");

    const penImg = document.createElement("img");
    penImg.src = "pen.png";
    const trashButton = document.createElement("button");
    trashButton.id = "trash";
    trashButton.appendChild(penImg);

    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerText = "Task";
    newTask.draggable = true;
    newTask.classList.add("orange");
    newTask.appendChild(trashButton);
    newTask.appendChild(textbox);

    showColorButtons(newTask, textbox);

    trashButton.addEventListener("click", () => { newTask.remove(); });
    newTask.addEventListener("dragstart", dragstartHandler);

    taskCollections.appendChild(newTask);
});


function showColorButtons(task: HTMLElement, textBox: HTMLTextAreaElement): void {
    const colorButtonCollection = document.createElement("div");
    for (let i = 0; i < 5; i++) {
        const button = document.createElement("button");
        button.classList.add(colors[i]);
        button.addEventListener("click", () => { changeColorOfTask(task, textBox, colors[i]); });
        colorButtonCollection.appendChild(button);
    }
    task.appendChild(colorButtonCollection);
}

function changeColorOfTask(task: HTMLElement, textBox: HTMLTextAreaElement, colorClass: string): void {
    for (let i = 0; i < 5; i++) {
        task.classList.remove(colors[i]);
        textBox.classList.remove(colors[i]);
    }
    task.classList.add(colorClass);
    textBox.classList.add(colorClass);
}

function dragstartHandler(ev: DragEvent): void {
    const target = ev.currentTarget as HTMLElement;
    console.log(target.outerHTML);
    draggedTask = target;
    isDragging = true;
    console.log("drag started");
    console.log(draggedTask);
}


columns.forEach((column) => {
    column.addEventListener("dragover", (ev: Event) => {
        ev.preventDefault();
        console.log("drag over");
        if (isDragging) {
            column.classList.add("drag-active-hover");
        }
    });

    column.addEventListener("dragleave", (ev: Event) => {
        ev.preventDefault();
        column.classList.remove("drag-active-hover");
    });

    column.addEventListener("drop", (ev: Event) => {
        ev.preventDefault();
        if (draggedTask) {
            (ev.currentTarget as HTMLElement).appendChild(draggedTask);
        }
        draggedTask = null;
        isDragging = false;
        column.classList.remove("drag-active-hover");
        console.log(draggedTask);
    });
});
