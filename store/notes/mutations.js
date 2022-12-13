export default {
  arrNotes(state, arrNotes) {
    state.arrNotes = arrNotes
  },
  createNote(state, newNotes) {
    state.arrNotes.unshift(newNotes)
  }
}
