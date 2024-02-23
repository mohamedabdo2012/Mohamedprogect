const textInput = document.getElementById("textInput");

const myList = document.getElementById("myList");
const itemsNumber = document.getElementById("itemsNumber");
var hobbiesList = [];

function addItem() {
    const item = textInput.value;
    if (item == "") {
        alert("Please enter valid data");
    } else {
        hobbiesList.push(item);
        textInput.value = "";
        updateItemsNumber();
    }
}

function updateItemsNumber() {
    const count = hobbiesList.length;
    itemsNumber.innerText = count;  
}

function listItems() {
   if (hobbiesList.length == 0) {
        alert("No Data .. please add some data");
   } else {
        clearList();

        for (let index = 0; index < hobbiesList.length; index++) {
            const element = hobbiesList[index];
            const newItem = document.createElement("li");
            newItem.innerText = element;
            myList.appendChild(newItem);
        }
   }
}

function clearList() {
    myList.innerHTML = "";
}

function deleteList(params) {
    hobbiesList = [];
    clearList();
    updateItemsNumber();
}