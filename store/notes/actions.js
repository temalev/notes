export default {
  addNote(context, newArr) {
    console.log(context.state.arrNotes)
    const newNotes = context.state.arrNotes
    newNotes.push(newArr)
    context.commit('arrNotes', newNotes)
  }
}
