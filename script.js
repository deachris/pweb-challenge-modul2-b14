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

// 3. Logika Filter (Event Listener untuk tombol)
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


// ==========================================
// INISIALISASI AWAL 
// ==========================================
loadTasks();
renderTasks();