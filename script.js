//create variable to store html form tag 
const form = document.getElementById("toDoForm");

function submit(event) {
  event.preventDefault();

  //ADDING ITEM TO LIST
  //Storing text entered in variable
  const value = event.target.newToDo.value;
  //Creating new html tag
  const listItem = document.createElement("li");
  //inputting text entered into new html list tag
  listItem.textContent = value;
  const ul = document.getElementById("list");
  ul.appendChild(listItem);


  //DELETING ITEM FROM LIST
  //Create delete button
  const itemDelete = document.createElement("button");
  itemDelete.textContent = "Delete";

  //Adding functionality to delete button
  itemDelete.onclick = function () {
    this.parentElement.remove();
  };

  //removes list item in html
  listItem.appendChild(itemDelete);

}
form.addEventListener("submit", submit);

