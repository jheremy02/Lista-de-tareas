export function buildTaskItem(content) {
    return `
    <input type="text" class="task-description" value="${content}" readonly>
                <div class="task-options">
                    <button  class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>

    `
}

export function buildEditItem() {
        return `
        <input type="text" name="inputDescTask" id="" class="inputDescTask">
        <div class="task-options">
            <button class="save-button">Save</button>
            <button class="delete-button">Delete</button>
        </div>
    `
}