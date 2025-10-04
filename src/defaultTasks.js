const defaultTasks = [
  { id: 0, title: "Fix Batmobile", desc: "Run full diagnostics and install armor upgrades.", date: "2025-10-01", priority: 3 },
  { id: 1, title: "Night Patrol", desc: "Sweep Gotham's East End for unusual activity.", date: "2025-10-02", priority: 2 },
  { id: 2, title: "Meet Gordon", desc: "Exchange intel on Two-Face sightings.", date: "2025-10-03", priority: 1 },
  { id: 3, title: "Recharge", desc: "Rest after extended missions. Alfred's orders.", date: "2025-10-04", priority: 0 },
  { id: 4, title: "Intel Analysis", desc: "Decrypt the Joker's encrypted radio signals.", date: "2025-10-05", priority: 3 },
  { id: 5, title: "Train with Robin", desc: "Tactical simulation in the Batcave.", date: "2025-10-07", priority: 2 },
  { id: 6, title: "Stakeout at Docks", desc: "Track shipment movements linked to Penguin.", date: "2025-10-06", priority: 1 },
  { id: 7, title: "System Maintenance", desc: "Update Batcomputer firmware and backups.", date: "2025-10-08", priority: 0 }
];

export function createDefaultTasks() {
  defaultTasks.forEach(task => {

    if (localStorage.length === 0) {

      if (!localStorage.getItem("tasks")) {
        localStorage.setItem("tasks", "[]")
      }

      const tasks = JSON.parse(localStorage.getItem("tasks"))
      tasks.push(task)

      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  });
}