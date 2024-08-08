import pen from '!!svg-inline-loader!./asset/svg/pen.svg'
import remove from '!!svg-inline-loader!./asset/svg/remove.svg'


const display = (function() {
  const projectsDiv = document.querySelector('.projects')
  const notesDiv = document.querySelector('.notes')

  function pushNotes(notes) {
    for (let i = 0; i < notes.length; i++) {
      const wrapper = document.createElement('div')
      wrapper.classList.add('priority' + notes[i].priority)
      
      const title = document.createElement('div')
      title.classList.add('title')
      title.textContent = notes[i].title

      const dueDate = document.createElement('div')
      dueDate.classList.add('due-date')
      dueDate.textContent = notes[i].dueDate

      const btnWrp = document.createElement('div')
      btnWrp.classList.add('btn-wrp')
      btnWrp.setAttribute('data-idx', i)
      const editBtn = document.createElement('button')
      editBtn.setAttribute('data-btn', 'edit')
      editBtn.innerHTML = pen

      const removeBtn = document.createElement('button')
      removeBtn.setAttribute('data-btn', 'remove')
      removeBtn.innerHTML = remove
      btnWrp.append(editBtn, removeBtn)

      wrapper.append(title, dueDate, btnWrp)
      notesDiv.append(wrapper)
    }
  }

  function clearNotes() {
    for (let i = notesDiv.childNodes.length; i > 1; i--)
      notesDiv.removeChild(notesDiv.lastChild)
  }

  function pushProjects(projects) {
    for (let i = 0; i < projects.length; i++) {
      const btn = document.createElement('button')
      btn.setAttribute('data-idx', i)
      btn.textContent = projects[i].name
      projectsDiv.append(btn)
    }
  }

  function clearProjects() {
    for (let i = projectsDiv.childNodes.length; i > 1; i--)
      projectsDiv.removeChild(projectsDiv.lastChild)
  }


  return {clearProjects, pushProjects, clearNotes, pushNotes}
})()

export default display