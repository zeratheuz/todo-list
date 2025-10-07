const defaultTasks = {
  task_0: { title: "Fix Car", desc: "Take the car for repairs.", date: "2025-10-01", priority: 3, id: "task_0" },
  task_1: { title: "Evening Walk", desc: "Go out for fresh air.", date: "2025-10-02", priority: 2, id: "task_1" },
  task_2: { title: "Meet with Manager", desc: "Discuss project updates.", date: "2025-10-03", priority: 1, id: "task_2" },
  task_3: { title: "Rest Day", desc: "Take a full day off.", date: "2025-10-04", priority: 0, id: "task_3" },
  task_4: { title: "Review Reports", desc: "Check recent reports.", date: "2025-10-05", priority: 3, id: "task_4" },
  task_5: { title: "Workout Session", desc: "Do a workout session.", date: "2025-10-07", priority: 2, id: "task_5" },
  task_6: { title: "Grocery Shopping", desc: "Buy weekly groceries.", date: "2025-10-06", priority: 1, id: "task_6" },
  task_7: { title: "Computer Update", desc: "Install system updates.", date: "2025-10-08", priority: 0, id: "task_7" }
};

export function createDefaultTasks() {
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", "{}")
  }

  const tasks = JSON.parse(localStorage.getItem("tasks"))

  if (!Object.keys(tasks).length) {
    Object.entries(defaultTasks).forEach(([id, task]) => {
      tasks[id] = task
    });

    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
}