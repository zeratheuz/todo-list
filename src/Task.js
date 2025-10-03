export class Task {
  constructor({ title, desc, date, priority = 0 }) {
    this.title = title,
      this.desc = desc,
      this.date = date,
      this.priority = +priority,
      this.id = "task_" + crypto.randomUUID()
  }
}