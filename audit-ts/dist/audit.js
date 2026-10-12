"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isTaskStatus(status) {
    return status === "all" || status === "active" || status === "done";
}
const tasks = [
    {
        id: 1,
        title: "Belajar TypeScript",
        completed: false,
        priority: "high",
    },
    {
        id: 2,
        title: "Mengerjakan latihan list",
        completed: true,
        priority: "medium",
    },
];
function listTasks(status) {
    const filteredTasks = tasks.filter((task) => {
        if (status === "done") {
            return task.completed;
        }
        if (status === "active") {
            return !task.completed;
        }
        return true;
    });
    if (filteredTasks.length === 0) {
        console.log(`Tidak ada task dengan status ${status}.`);
        return;
    }
    for (const task of filteredTasks) {
        const taskStatus = task.completed ? "done" : "active";
        console.log(`${task.id}. ${task.title} [${taskStatus}] - priority: ${task.priority}`);
    }
}
function run(args) {
    const [command, ...options] = args;
    if (command !== "list") {
        console.error("Penggunaan: npm start -- list [--status all|active|done]");
        process.exitCode = 1;
        return;
    }
    const statusOptionIndex = options.indexOf("--status");
    const statusValue = statusOptionIndex === -1 ? "all" : options[statusOptionIndex + 1];
    if ((statusOptionIndex !== -1 && statusValue === undefined) ||
        !isTaskStatus(statusValue)) {
        console.error("Status harus salah satu dari: all, active, done.");
        process.exitCode = 1;
        return;
    }
    listTasks(statusValue);
}
run(process.argv.slice(2));
//# sourceMappingURL=audit.js.map