class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.title = '' + title
    this.description = '' + description
    this.dueDate = dueDate
    this.priority = +priority
    this.project = '' + project
    this.completed = false
  }

  isCompleted = () => {
    return this.completed
  }

  markCompleted = () => {
    this.completed = true
  }

  markIncompleted = () => {
    this.completed = false
  }

  setPriority(priority) {
    if (priority < 1 || priority > 3)
      priority = 3
    this.priority = +priority
  }

  setProject(project) {
    this.project = project
  }

}

export default Todo