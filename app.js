
import { buildTaskItem,buildEditItem } from "./TaskView.js";

let inputSearchElement=document.querySelector(".input-search")
const tasksListElement=document.querySelector(".tasks-list-container")
const searchFormNode=document.querySelector(".search-form")




searchFormNode.addEventListener('submit',(event)=>{
    event.preventDefault()

    const contentInput=inputSearchElement.value
    inputSearchElement.value=""
    const taskItemTemplate= buildTaskItem(contentInput)
    const taskItemNode=document.createElement('div')
    taskItemNode.classList.toggle("task-item")
    taskItemNode.innerHTML=taskItemTemplate
    tasksListElement.appendChild(taskItemNode)
    
    let editButtonElemt=taskItemNode.querySelector(".edit-button")

    editButtonElemt.addEventListener('click' ,()=>{

        if (editButtonElemt.innerText=="Edit") {
            editTask(taskItemNode,editButtonElemt)
        } else {
            saveTask(taskItemNode,editButtonElemt)
        }
        
    })

    let deleteButtonElemt=taskItemNode.querySelector(".delete-button")
    deleteButtonElemt.addEventListener('click',()=>{
        deleteTask(taskItemNode)
    })
    
})






function saveTask(taskItemNode,editButtonElemt) {
    taskItemNode.querySelector(".task-description").classList.toggle("task-description-edit")
            taskItemNode.querySelector(".task-description").setAttribute("readonly","readonly")
            editButtonElemt.classList.toggle("edit-button")
            editButtonElemt.classList.toggle("save-button")
            editButtonElemt.textContent="Edit"
}

function deleteTask(taskItemNode) {
    const answer=confirm("¿ seguro que quieres eliminar la tarea ?")
        if (answer) {
            taskItemNode.outerHTML=""
        }
}

function editTask(taskItemNode,editButtonElemt) {
    taskItemNode.querySelector(".task-description").removeAttribute("readonly")
            editButtonElemt.classList.toggle("edit-button")
            editButtonElemt.classList.toggle("save-button")

            taskItemNode.querySelector(".task-description").focus()
            taskItemNode.querySelector(".task-description").classList.toggle("task-description-edit")
            editButtonElemt.textContent="Save"
}