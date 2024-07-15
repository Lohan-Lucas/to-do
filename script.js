const addButton = document.getElementById('add_button')
const list = document.getElementById('to_do_list')


addButton.addEventListener('click', function addItem(){
    const task = document.getElementById('task') 
    const newDiv = document.createElement('div')
    newDiv.id = 'div_task'
    const newCheckBox = document.createElement('input')
    newCheckBox.type = 'checkbox'
    newCheckBox.id = 'checkbox_mark'
    const newText = document.createElement('span')
    const removeButton = document.createElement('button')
    removeButton.innerHTML = 'Remove'
    removeButton.id = 'removeButton'
    
    newText.append(task.value)
    newDiv.append(newCheckBox, newText, removeButton)
    list.appendChild(newDiv)
    
    task.value = ''
    
    newCheckBox.addEventListener('click', function(){     
        if(newCheckBox.checked) {
            newText.style = 'text-decoration: line-through'
        } else {
            newText.style = 'text-decoration: none'
        }
    })
    removeButton.addEventListener('click', function(){
        newDiv.remove()
    })
})

    

