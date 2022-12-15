<template>
  <div class="mainNote">
    <nuxt-link :to="'/'">Главная</nuxt-link>
    <div class="noteContainer">
      <h2>{{ note.title }}</h2>
      <pre class="description">{{ note.description }}</pre>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Note',

  computed: {
    ...mapGetters('notes', ['note'])
  },
  mounted() {
    this.$store.commit('notes/note', JSON.parse(localStorage.note))
  }
}
</script>

<style scoped>
.mainNote {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 50px auto;
  background-color: #fff;
  gap: 20px;
}
.description {
  width: 100%;
  overflow: auto;
  hyphens: auto;
  padding: 10px 0;
}
</style>
