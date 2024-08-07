class Project {
  #name = ''
  #notes = []

  constructor(name) {
    this.#name = '' + name
  }

  get name() {
    return this.#name
  }

  get notes() {
    return this.#notes
  }

  removeItem(idx) {
    this.#notes.splice(idx, 1)
  }

  prepend(item) {
    this.#notes.unshift(item)
  }

  getLastNote() {
    return this.#notes[0]
  }

  changeName(name) {
    this.name = name
  }
  
}

export default Project