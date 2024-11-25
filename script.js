// script.js

// Select DOM elements
const tasksSection = document.getElementById("tasks-section");
const scheduledTasksSection = document.getElementById("scheduled-tasks-section");
const settingsSection = document.getElementById("settings-section");

const tasksBtn = document.getElementById("tasks-btn");
const scheduledTasksBtn = document.getElementById("scheduled-tasks-btn");
const settingsBtn = document.getElementById("settings-btn");

const taskInput = document.getElementById("task-input");
const taskDate = document.getElementById("task-date");
const taskTime = document.getElementById("task-time");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const scheduledTaskList = document.getElementById("scheduled-task-list");

// Show/hide sections
tasksBtn.addEventListener("click", () => {
    tasksSection.style.display = "block";
    scheduledTasksSection.style.display = "none";
    settingsSection.style.display = "none";
});

scheduledTasksBtn.addEventListener("click", () => {
    tasksSection.style.display = "none";
    scheduledTasksSection.style.display = "block";
    settingsSection.style.display = "none";
});

settingsBtn.addEventListener("click", () => {
    tasksSection.style.display = "none";
    scheduledTasksSection.style.display = "none";
    settingsSection.style.display = "block";
});

// Add tasks (to both Today Tasks and Scheduled Tasks)
addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    const date = taskDate.value;
    const time = taskTime.value;

    if (task && date && time) {
        // Create task element with delete button
        const todayTaskItem = document.createElement("li");
        todayTaskItem.textContent = `${task} - ${date} ${time}`;
        const deleteBtnToday = document.createElement("button");
        deleteBtnToday.textContent = "Delete";
        deleteBtnToday.classList.add("delete-btn");
        todayTaskItem.appendChild(deleteBtnToday);
        taskList.appendChild(todayTaskItem);

        // Create scheduled task element with delete button
        const scheduledTaskItem = document.createElement("li");
        scheduledTaskItem.textContent = `${task} - ${date} ${time}`;
        const deleteBtnScheduled = document.createElement("button");
        deleteBtnScheduled.textContent = "Delete";
        deleteBtnScheduled.classList.add("delete-btn");
        scheduledTaskItem.appendChild(deleteBtnScheduled);
        scheduledTaskList.appendChild(scheduledTaskItem);

        // Add event listener for delete buttons
        deleteBtnToday.addEventListener("click", () => {
            taskList.removeChild(todayTaskItem);
            scheduledTaskList.removeChild(scheduledTaskItem);
        });

        deleteBtnScheduled.addEventListener("click", () => {
            scheduledTaskList.removeChild(scheduledTaskItem);
            taskList.removeChild(todayTaskItem);
        });

        // Clear input fields
        taskInput.value = "";
        taskDate.value = "";
        taskTime.value = "";
    }
});