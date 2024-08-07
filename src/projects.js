class Project {
  #name = ''
  #notes = []

  constructor(name) {
    this.#name = '' + name
  }

  get name() {
    return this.#name
  }

  prepend(item) {
    this.#notes.shift(item)
  }

  getLastNote() {
    return this.#notes[0]
  }

  changeName(name) {
    this.name = name
  }
  
}

export default Project