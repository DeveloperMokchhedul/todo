const inputData = document.querySelector("#new_To_Do_Item");
const addData = document.querySelector("#addBtn");
const parentElement = document.querySelector("#parentElement");

let currentLiElement = null;
addData.addEventListener("click", () => {
    let data = inputData.value.trim();
    if (data.length == 0) {
        alert("input field required")
        return false;
    }

    if (addData.textContent === "Add") {
        let todoList = document.createElement("li");
        todoList.className = "flex justify-between mb-5";
        todoList.innerHTML =
            `${data} 
            <div>
                <button onclick="handleEdit(this)" class="bg-green-600 text-white px-4 py-1 rounded-md">Edit</button>
                <button onclick="handleDelete(this)" class="bg-red-600 text-white px-4 py-1 rounded-md">Delete</button>
            </div>
        `;
        if (parentElement.firstChild) {
            parentElement.insertBefore(todoList, parentElement.firstChild);
        }else{
            parentElement.appendChild(todoList);
        }
        
    } else if (currentLiElement !== null) {
        currentLiElement.textContent = data;
        addData.textContent = "Add";
        currentLiElement = null;
    }
    inputData.value = "";
});

const handleDelete = (deleteData) => {
    const proParent = deleteData.closest("li");
    proParent.remove();

};

const handleEdit = (editData) => {
    let liElement = editData.closest("li").childNodes[0];
    if (liElement) {
        inputData.value = liElement.textContent.trim();
        addData.textContent = "Save";
        currentLiElement = liElement;
    }

};
