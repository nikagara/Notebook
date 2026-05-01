const input = document.getElementById('note-title');
const button = document.querySelector('.create');
let notes = []

button.addEventListener('click', function(button) {
    const text = input.value;
    const li = document.createElement('li');
    li.className = 'note-item'
    li.textContent = text;
    notes.push(text)
    localStorage.setItem('notes', JSON.stringify(notes))

    const btn = document.createElement('button')
    btn.className = 'delete-btn'
    btn.textContent = 'Удалить'
    li.appendChild(btn)

    btn.addEventListener('click', function() {
    li.remove()
})

    document.getElementById('notes-list').appendChild(li);
    input.value = ''
})

document.addEventListener('DOMContentLoaded', function() {
    // читаем из localStorage и отрисовываем заметки
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    savedNotes.forEach(function(loadNote) {
    const lisave = document.createElement('li');
    lisave.className = 'note-item'
    lisave.textContent = loadNote;

    const btn = document.createElement('button')
    btn.className = 'delete-btn'
    btn.textContent = 'Удалить'
    lisave.appendChild(btn)

    btn.addEventListener('click', function() {
    lisave.remove()
})
    document.getElementById('notes-list').appendChild(lisave);
    })
    })