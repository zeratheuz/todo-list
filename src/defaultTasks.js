const defaultTasks = {
  task_0: { title: "Review Reports", desc: "Check recent reports.", date: "2025-10-05", priority: 3, id: "task_4" },
  task_1: { title: "Workout Session", desc: "Do a workout session.", date: "2025-10-07", priority: 2, id: "task_1" },
  task_2: { title: "Grocery Shopping", desc: "Buy weekly groceries.", date: "2025-10-06", priority: 1, id: "task_2" },
  task_3: { title: "Computer Update", desc: "Install system updates.", date: "2025-10-08", priority: 0, id: "task_3" }
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