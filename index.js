const input = document.getElementById('note-title');
const button = document.querySelector('.create');

button.addEventListener('click', function(button) {
    const text = input.value;
    const li = document.createElement('li');
    li.className = 'note-item'
    li.textContent = text;

    const btn = document.createElement('button')
    btn.className = 'delete-btn'
    btn.textContent = 'Удалить'
    li.appendChild(btn)

    btn.addEventListener('click', function() {
    li.remove()
})

    document.getElementById('notes-list').appendChild(li);
})