const defaultTasks = {
  task_0: { title: "Fix Car", desc: "Take the car to the mechanic for diagnostics and repairs.", date: "2025-10-01", priority: 3 },
  task_1: { title: "Evening Walk", desc: "Go for a walk to get some fresh air.", date: "2025-10-02", priority: 2 },
  task_2: { title: "Meet with Manager", desc: "Discuss project updates and next steps.", date: "2025-10-03", priority: 1 },
  task_3: { title: "Rest Day", desc: "Take the day off to relax and recharge.", date: "2025-10-04", priority: 0 },
  task_4: { title: "Review Reports", desc: "Go through the latest financial or project reports.", date: "2025-10-05", priority: 3 },
  task_5: { title: "Workout Session", desc: "Attend a gym session or do a home workout.", date: "2025-10-07", priority: 2 },
  task_6: { title: "Grocery Shopping", desc: "Pick up weekly groceries from the local store.", date: "2025-10-06", priority: 1 },
  task_7: { title: "Computer Update", desc: "Install system updates and back up important files.", date: "2025-10-08", priority: 0 }
};

export function createDefaultTasks() {
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", "{}")
  }

  const tasks = JSON.parse(localStorage.getItem("tasks"))

  if (Object.keys(tasks).length === 0) {
    Object.entries(defaultTasks).forEach(task => {
      tasks[task.id] = task
      localStorage.setItem("tasks", JSON.stringify(tasks))
    });
  }
}