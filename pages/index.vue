<template>
  <div class="mainContainer">
    <h1>Заметки</h1>
    <div class="mainNotesContainer">
      <div class="leftContainer">
        <formNotes />
      </div>
      <div class="rightContainer">
        <div v-if="arr.length" class="notesContainer">
          <note v-for="(note, id) in arr" :key="`note_${id}`" :note="note" />
        </div>

        <span v-else class="message">Добавьте заметку</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',

  data() {
    return {
      localNotes: []
    }
  },

  computed: {
    ...mapGetters('notes', ['arrNotes']),

    arr() {
      return this.arrNotes
    },

    arrLength() {
      return this.arrNotes.length
    }
  },

  watch: {
    arrLength(newCount, oldCount) {
      if (newCount !== oldCount) {
        localStorage.setItem('notes', JSON.stringify(this.arrNotes))

        this.$store.commit('notes/arrNotes', JSON.parse(localStorage.notes))
      }
    }
  },

  mounted() {
    if (localStorage.notes) {
      this.$store.commit('notes/arrNotes', JSON.parse(localStorage.notes))
    }
  }
}
</script>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 50px auto;
  background-color: #fff;
  gap: 20px;
}
.mainNotesContainer {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 20px;
}
.leftContainer {
  width: 30%;
}
.rightContainer {
  display: flex;
  gap: 20px;
  width: 70%;
  height: 100%;
  flex-flow: wrap;
}
.notesContainer {
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  flex-flow: wrap;
}
</style>
