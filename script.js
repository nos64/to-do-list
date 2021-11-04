// let input = document.getElementById('input-task');
// let btn = document.getElementById("add-task-button"); 
// let ulList = document.getElementById('task-list');

// function addTask(newTask){
// 	let newLi = document.createElement('li');
// 	ulList.append(newLi);
// 	let newCheckbox = document.createElement('input');
//       	newCheckbox.setAttribute('type', 'checkbox');
//       	newCheckbox.className = 'checkbox';
// 	    newLi.append(newCheckbox);
//     let newSpan = document.createElement('span');
//       	newSpan.className = 'task';
// 	newSpan.innerHTML = newTask;
// 	    newLi.append(newSpan);
	
//       	const newBtn = document.createElement('button');
// 		newBtn.innerText = 'X';
//       	newBtn.className = 'delete-btn';
//       	newLi.append(newBtn);

//         newBtn.addEventListener('click', (e) => {
//     		newLi.remove();
// 	        savedTasks = savedTasks.filter((e) => e !== newLi);
// 		    localStorage.setItem("tasks", JSON.stringify(savedTasks));
// 	    });
// }

// // load saved tasts
// let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// // add UI elements for any saved task
// savedTasks.forEach(addTask);

//  btn.addEventListener("click", () => {
//    let newTask = input.value;
//    if (newTask === "") {
//      alert("Please write something to do!");
//    } else {
//      savedTasks.push(newTask);
//      localStorage.setItem("tasks", JSON.stringify(savedTasks));
//      input.value = "";
//      addTask(newTask);
//    }
// });     	

// ulLst.addEventListener("click", (e) => {
// 	if (e.target.tagName == "LI") {
// 	  e.target.classList.toggle("checked");
// 	}
//   });
  



const taskInput = document.getElementById("input-task");
const addTask = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

function newTask() {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" class="checkbox"><span class="task">${
        document.getElementById("input-task").value
    }</span><button class="delete-btn">x</button>`;

    taskList.append(li);
}

function setToStorage() {
    const taskItems = [];

    const values = document.querySelectorAll("li");

    for (let i = 0; i < values.length; i++) {
        taskItems.push(values[i].innerHTML);
    }

    localStorage.setItem("tasks", JSON.stringify(taskItems));
}

addTask.addEventListener("click", () => {
    if (taskInput.value) {
        newTask();
        taskInput.value = "";
        setToStorage();
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.className === "delete-btn") {
        e.target.parentNode.remove();
        setToStorage();
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {
        e.target.nextSibling.classList.toggle("completed");
        setToStorage();
    }
});

function getFromStorage() {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];

    for (let i = 0; i < stored.length; i++) {

        const li = document.createElement("li");

        li.innerHTML = stored[i];
        if (stored[i].includes("completed")) {
            li.firstChild.checked = true;
        }
        taskList.appendChild(li);
    }
}

getFromStorage();