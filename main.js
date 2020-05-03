// const tasks = require("")
const $ = require("jquery");

const listenForClicks = () => {
    document.addEventListener("click", e => {
        // if(e.target.id ==="testBtn2"){
        //     // browser.tabs.sendMessage(tabs[0].id,{command:"test"});
        //     console.log("Check");
        //     document.body.style.border = "5px solid black";

        // }

        switch (e.target.id) {
            case "in-progress-btn":
                clearList();
                // document.body.style.border = "5px solid red";

                addTasksToList("inProgress");
                break;
            case "on-hold-btn":
                // document.body.style.border = "5px solid black";

                clearList();
                addTasksToList("onHold");
                break;
            case "completed-btn":
                // document.body.style.border = "5px solid yellow";

                clearList();
                addTasksToList("completed");
                break;

            case "begin-input-btn":
                openForm();
                break;
            case "close-input-btn":
                closeForm();
                break;
            case "add-new-task-btn":
                const taskObj = {
                    title:document.getElementById("title-input").innerHTML,
                    description:document.getElementById("description-input").innerHTML
                }

                

                closeForm();

                break;
            default:
                break;
        }

    });
}


const addTasksToList = (type) => {
    let listToReturn = [];
    let ul = document.getElementById("current-task-list");
    try {
        switch (type) {
            case "completed":
                for (let i = 0; i < 100; i++) {
                    listToReturn.push(createNewListElement({ title: `completed:${i}` }));
                }
                break;
            case "onHold":
                for (let i = 0; i < 100; i++) {
                    listToReturn.push(createNewListElement({ title: `onHold:${i}` }));

                }
                break;
            case "inProgress":
                for (let i = 0; i < 100; i++) {
                    listToReturn.push(createNewListElement({ title: `inProgress:${i}` }));
                }
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }
    for (let i = 0, len = listToReturn.length; i < len; i++) {
        ul.appendChild(listToReturn[i]);
    }
}

const createNewListElement = (taskObject) => {
    let liToReturn = {};
    try {
        liToReturn = document.createElement("li");
        liToReturn.innerHTML = taskObject.title;
    } catch (error) {
        console.log(error);
    }
    return liToReturn;
}

const readTasks = () => {

}

const writeTasks = () => {

}

const clearList = () => {
    let ul = document.getElementById("current-task-list");
    ul.innerHTML = "";
}

const openForm = () => {
    document.getElementById("input-div").style.display = "block";
}

const closeForm = () => {
    document.getElementById("input-div").style.display = "none";
}

listenForClicks();


