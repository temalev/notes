<template>
  <div class="mainForm">
    <form action="" class="formsContainer">
      <basicInput @updateValue="setValue" />
      <basicTextfield @updateValue="setValueTextField" />
    </form>

    <basicButton
      :add-class="'fillMainAction'"
      :action-btn="'addNote'"
      @isAction="addNote"
    >
      <template slot="text">Добавить</template>
    </basicButton>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'FormNotes',

  data() {
    return {
      formData: {
        title: null,
        description: null
      }
    }
  },
  computed: {
    ...mapGetters('notes', ['arrNotes'])
  },

  methods: {
    ...mapMutations('notes', ['createNote']),

    addNote() {
      this.createNote({
        uuid: this.$uuid.v4(),
        title: this.formData.title,
        description: this.formData.description
      })
      // const newArr = {
      //   uuid: this.$uuid.v4(),
      //   title: this.formData.title,
      //   description: this.formData.description
      // }
      // this.$store.dispatch('notes/addNote', newArr)
    },

    setValue(value) {
      this.formData.title = value
    },

    setValueTextField(value) {
      this.formData.description = value
    }
  }
}
</script>
<style scoped>
.mainForm {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.formsContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
