<template>
  <div class="mainNote">
    <div class="textContainer">
      <h4>{{ note.title }}</h4>
      <p class="textNote">
        {{ note.description }}
      </p>
    </div>
    <div class="buttonsContainer">
      <basicButton
        v-for="(btn, idBtn) in buttons"
        :key="`button_${idBtn}`"
        :add-class="btn.class"
        :action-btn="btn.action"
        @isAction="actionNote"
      >
        <template slot="text">{{ btn.name }}</template>
      </basicButton>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BasicNote',
  props: {
    note: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      buttons: [
        { name: 'Открыть', action: 'open', class: 'mainAction' },
        { name: 'Удалить', action: 'delete', class: 'supportAction' }
      ]
    }
  },
  computed: {
    ...mapGetters('notes', ['notes'])
  },
  methods: {
    actionNote(action) {
      if (action === 'deleteNote') {
        const newNotes = this.notes.filter(
          (note) => note.uuid !== this.note.uuid
        )
        this.$store.commit('notes/notes', newNotes)
      }
    }
  }
}
</script>
<style scoped>
.mainNote {
  width: 250px;
  height: 200px;
  padding: 15px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
}
.textContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
h4 {
  font-size: 20px;
  padding: 0;
}
.buttonsContainer {
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
  align-items: center;
}
</style>
