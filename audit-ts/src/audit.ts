type TaskFilter = "all" | "active" | "completed";
let currentFilter: TaskFilter = "active";

function taskFilter(filter: TaskFilter) {
    if (filter === "all") {
        console.log("Tampilan semua task");
    }
    else if (filter === "active") {
        console.log("Tampilan task aktif");
    }
    else if (filter === "completed") {
        console.log("Tampilan task selesai");
    }
    else {
        console.log("Filter tidak tersedia");
    }
}

currentFilter = "completed";
taskFilter(currentFilter);