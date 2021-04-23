const form = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const inputSearchTodo = document.querySelector('.form-search input')


const addTodo = (event) => {
  const inputValue = event.target.add.value.trim();

  if(inputValue.length){
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt " data-trash="${inputValue}"></i>
      </li>
    `
    event.target.reset()
  }
}

const deleteTodo = (event) => {
  const clickedElement = event.target
  const trashDataValue = clickedElement.dataset.trash
  const todo = document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`).remove()

  if(trashDataValue ){
    todo
  }
}

const filterTodos = (todo, inputValue, returnMatchTodos) =>{
  return todo
  .filter((todo) => {
    const matchTodos = todo.textContent.toLowerCase().includes(inputValue)
    return returnMatchTodos ? matchTodos : !matchTodos
  }) 
}

const hiddenTodo = (todo,inputValue) => {
  filterTodos(todo,inputValue, false)
  .forEach((todo) => {
    todo.classList.remove("d-flex");
    todo.classList.add("hidden");
  });
}

const showTodo = (todo,inputValue) => {
    todo
     filterTodos(todo, inputValue, true)
     .forEach((todo) => {
       todo.classList.remove("hidden");
       todo.classList.add("d-flex");
     });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(event)
});

todosContainer.addEventListener('click', event =>{
  deleteTodo(event)
})

inputSearchTodo.addEventListener('input', event =>{
  const inputValue = event.target.value.trim().toLowerCase()
  const todo = Array.from(todosContainer.children)
  
  hiddenTodo(todo, inputValue) 
  showTodo(todo, inputValue)  
})