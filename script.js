const addButton = document.getElementById('add_button');
const list = document.getElementById('to_do_list');

function createDivTask(taskValue) {
    const newDiv = document.createElement('div');
    newDiv.className = 'input-group-text';
    newDiv.id = 'newdiv'
    
    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.className = 'form-check-input mt-0';
    
    const newText = document.createElement('span');
    newText.textContent = taskValue;
    
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/></svg>';
    removeButton.className = 'btn btn-danger';

    newDiv.append(newCheckBox, newText, removeButton);

    // Adiciona o listener para a checkbox
    newCheckBox.addEventListener('click', () => {     
        if (newCheckBox.checked) {
            newText.style.textDecoration = 'line-through';
        } else {
            newText.style.textDecoration = 'none';
        }
    });

    // Adiciona o listener para o botão de remoção
    removeButton.addEventListener('click', function() {
        newDiv.remove();
    });

    return newDiv;
}

addButton.addEventListener('click', function() {
    const task = document.getElementById('task');
    
    // Verifica se há um valor na tarefa
    if (!task.value) {
        alert('Please enter a task!');
        return;
    }

    const newDiv = createDivTask(task.value);
    list.appendChild(newDiv);

    // Limpa o valor do input
    task.value = '';
});

    

