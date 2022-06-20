const body = document.querySelector('body');
const newTaskForm=document.querySelector('#newTaskForm');
const toDoList = document.querySelector('#toDoList');
const todo = document.querySelector('#todo');

const savedTodos = JSON.parse(localStorage.getItem('todos'))||[];

for(let i = 0; i < savedTodos.length; i++){
    let newText = savedTodos[i].task.split('');
    let array = newText.splice(-6, 6);

    // // console.log(savedTodos[i].task.split('').slice(-6,6).join(''));
    // console.log(array, string);
    // Console.log(savedTodos[i].task.splice(-1, 6));
    let newItem = document.createElement('li');
    newItem.innerText = newText.join('');
    toDoList.append(newItem);

  
    //create checkbox for done
    let newCkBox= document.createElement('input');
    newCkBox.setAttribute('type', 'checkbox');
    newItem.append(newCkBox);
    console.log(newCkBox.parentElement)
    if(savedTodos[i].checked === true){
        newItem.classList.add('strike');
        newCkBox.checked = true;
    } 

    //create remove btn
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    newItem.append(removeBtn);
}

newTaskForm.addEventListener('submit', function(e){
    //prevent default refresh
    e.preventDefault();
       
    //prevent empty string to be added
    if (todo.value === ''){
        alert('Please enter what you need to do.')
    } else{
    
    //create remove btn
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    
    //create checkbox for done
    let newCkBox= document.createElement('input');
    newCkBox.setAttribute('type', 'checkbox');
    newCkBox.checked = false;
        
    //creating li and checkbox and remove btn
    let newLi = document.createElement('li');
    newLi.innerText = todo.value;
    
    
    //append created items
    toDoList.append(newLi);
    newLi.append(newCkBox);
    newLi.append(removeBtn);
    
    //save to-do information to an array
    savedTodos.push({task: newLi.innerText, checked: false});
    console.log(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    //reset form    
    newTaskForm.reset();
    }
});

toDoList.addEventListener('click', function(e){
    console.log(e.target);

    if(e.target.tagName === 'INPUT'){
        e.target.parentElement.classList.toggle('strike');
        console.log(e.target.parentElement.innerText);
        if(e.target.checked){
            for(let i = 0; i< savedTodos.length; i++){
                if (savedTodos[i].task === e.target.parentElement.innerText){
                    savedTodos[i].checked = true;
                    console.log("input", savedTodos);
                }
            }
        } else{
            savedTodos[i].checked = false;
        }
    } else if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        for(let i = 0; i< savedTodos.length; i++){
            if (savedTodos[i].task === e.target.parentElement.innerText){
                savedTodos.splice(i, 1);
                console.log(savedTodos);
            }
        }
    }

    localStorage.setItem("todos", JSON.stringify(savedTodos));
});
