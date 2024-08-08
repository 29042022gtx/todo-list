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



const project1 = new Project('Study')
const project2 = new Project('Hang out')
projects.add(project1)
projects.add(project2)
const note1 = new Todo('Python', 'loving', '20/5', 2)
const note2 = new Todo('JavaScript', 'loving', '15/2', 1)
const note3 = new Todo('Nation Park', 'loving', '2/6', 3)
projects.getItems()[0].prepend(note1)
projects.getItems()[0].prepend(note2)
projects.getItems()[1].prepend(note3)

display.pushProjects(projects.getItems())
display.pushNotes(projects.getItems()[0].notes)



