const form = document.querySelector('#newTaskForm');
const btn = document.querySelector('button[type="submit"]');
const task = document.querySelector('#task');
const toDoList = document.querySelector('#toDoList');
const savedTodos = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newLi = document.createElement('li');
    const newCkBox= document.createElement('input');
    const removeBtn = document.createElement('button');
    if (task.value === ''){
        alert('Please enter what you need to do.')
    } else{
    newCkBox.setAttribute('type', 'checkbox');
    removeBtn.setAttribute('class', 'remove');
    newLi.innerText = task.value;
    removeBtn.innerText = 'Remove';
    toDoList.append(newLi);
    newLi.append(newCkBox);
    newLi.append(removeBtn);
    }
    form.reset();

    //add to localStorage
    savedTodos = ({task: task.value, });

})

toDoList.addEventListener('click', function(e){
    if(e.target.tagName === 'INPUT'){
        e.target.parentElement.classList.toggle('strike');
    } else if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})


