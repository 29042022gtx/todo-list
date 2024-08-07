import './style.css'
import Project from './projects.js'
import Todo from './todo.js'

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
const note1 = new Todo('1', 'loving', '1/1/9999', 1)
const note2 = new Todo('2', 'loving', '1/1/9999', 1)
const note3 = new Todo('3', 'loving', '1/1/9999', 1)
const note4 = new Todo('4', 'loving', '1/1/9999', 1)
projects.getItems()[0].prepend(note1)
projects.getItems()[0].prepend(note2)
projects.getItems()[1].prepend(note4)


let s = projects.getItems()[0]
console.log(s);
s = projects.getItems()[1]
console.log(s);



