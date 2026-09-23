// Data, Local Storage & Filter

let tasks = [];
let currentFilter = 'all'; 

// 1. Mengambil Data dari LocalStorage
function loadTasks() {
    const data = localStorage.getItem('todo_data');
    if (data) {
        tasks = JSON.parse(data); 
    }
}

// 2. Menyimpan Data ke LocalStorage
function saveTasks() {
    localStorage.setItem('todo_data', JSON.stringify(tasks));
}

// 3. Logika Filter (addEventListener)
const btnAll = document.getElementById('btnAll');
const btnActive = document.getElementById('btnActive');
const btnCompleted = document.getElementById('btnCompleted');

btnAll.addEventListener('click', function() {
    currentFilter = 'all';
    renderTasks();
});

btnActive.addEventListener('click', function() {
    currentFilter = 'active';
    renderTasks();
});

btnCompleted.addEventListener('click', function() {
    currentFilter = 'completed';
    renderTasks();
});

// Tambah, Hapus, Coret Task

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Tugas nggak boleh kosong ya!');
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    taskInput.value = '';
}

addButton.addEventListener('click', addTask);

function deleteTask(id) {
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });
    saveTasks();
    renderTasks();
}

function toggleComplete(id) {
    tasks = tasks.map(function (task) {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';

    let visibleTasks = tasks;

    if (currentFilter === 'active') {
        visibleTasks = tasks.filter(function (task) {
            return !task.completed;
        });
    } else if (currentFilter === 'completed') {
        visibleTasks = tasks.filter(function (task) {
            return task.completed;
        });
    }

    visibleTasks.forEach(function (task) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = task.text;

        span.style.flex = '1';
        span.style.cursor = 'pointer';

        if (task.completed) {
            span.classList.add('completed')
        }

        span.addEventListener('click', function () {
            toggleComplete(task.id);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.addEventListener('click', function () {
            deleteTask(task.id);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
// INISIALISASI AWAL 
loadTasks();
renderTasks();