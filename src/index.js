import './style.css'
import Project from './projects.js'
import Todo from './todo.js'
import display from './display.js'

const projects = (function() {
    const items = []

    function getItems() {
      return items
    }
  
    function existed(name) {
      for (let item of items)
        if (item.name == name)
          return true
      return false
    }
  
    function add(item) {
      if (existed(item.name))
        return false
      items.push(item)
      return true
    }

    function removeItem(idx) {
      items.splice(idx, 1)
    }
  
    function search(name) {
      for (let item of items)
        if (item.name == name)
          return item
      return null
    }

    return {existed, add, removeItem, search, getItems}
})()

const listener = (function() {
  const projectsDiv = document.querySelector('.projects')
  const noteDialog = document.querySelector('dialog')
  const noteForm = noteDialog.querySelector('form')
  const addBtn = document.querySelector('#add-btn')
  const submitBtn = document.querySelector('#submit')
  setAddBtnIdx(0)
  const notesDiv = document.querySelector('.notes')

  notesDiv.addEventListener('click', function(e) {
    const dataBtn = e.target.getAttribute('data-btn')
    if (dataBtn == null)
      return

    const projectIdx = addBtn.getAttribute('data-idx')
    const project = projects.getItems()[projectIdx]
    const noteIdx = e.target.parentNode.getAttribute('data-idx') 
    if (dataBtn == 'edit') {
      const note = project.notes[noteIdx]
      noteForm.title.value = note.title
      noteForm.description.value = note.description
      noteForm.dueDate.value = note.getFormattedDate('yyyy-MM-dd')
      noteForm.priority.value = note.priority
      noteDialog.showModal()
      changeMod(noteIdx)
    } else {
      project.removeItem(noteIdx)
      pushNotes(projectIdx)
    }
  })

  submitBtn.addEventListener('click', function() {
    const title = noteForm.title.value
    const description = noteForm.description.value
    const dueDate = noteForm.dueDate.value
    const priority = noteForm.priority.value
    const note = new Todo(title, description, dueDate, priority)
    console.log(dueDate);
    const dataIdx = addBtn.getAttribute('data-idx')
    const project = projects.getItems()[dataIdx]

    const mode = submitBtn.getAttribute('data-mod')
    if (mode == 'add') {
      project.prepend(note)
    } else {
      const idx = +mode
      project.replace(idx, note)
    }
    pushNotes(dataIdx)
    noteForm.reset()
  })

  addBtn.addEventListener('click', function() {
    noteDialog.showModal()
    changeMod('add')
  })

  projectsDiv.addEventListener('click', function(e) {
    const dataIdx = e.target.getAttribute('data-idx')
    if (dataIdx == null)
      return
    pushNotes(dataIdx)
  })

  function changeMod(mod) {
    submitBtn.setAttribute('data-mod', mod)
  }

  function setAddBtnIdx(idx) {
    addBtn.setAttribute('data-idx', idx)
  }

  function pushNotes(dataIdx) {
    display.clearNotes()
    display.pushNotes(projects.getItems()[dataIdx].notes)
    setAddBtnIdx(dataIdx)
  }

})()

const project1 = new Project('Study')
const project2 = new Project('Hang out')
projects.add(project1)
projects.add(project2)
const note1 = new Todo('Python', 'loving', '2000-5-20', 2)
const note2 = new Todo('JavaScript', 'loving', '2000-2-15', 1)
const note3 = new Todo('Nation Park', 'loving', '2000-6-2', 3)
projects.getItems()[0].prepend(note1)
projects.getItems()[0].prepend(note2)
projects.getItems()[1].prepend(note3)

display.pushProjects(projects.getItems())
display.pushNotes(projects.getItems()[0].notes)

