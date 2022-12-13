<template>
  <div class="mainBasicInput">
    <span class="headerBasicInput">Заголовок</span>
    <input v-model="model" type="text" />
  </div>
</template>
<script>
export default {
  name: 'BasicInput',
  props: {},
  data() {
    return {
      inputValue: null
    }
  },
  computed: {
    model: {
      get() {
        return this.valueInput
      },
      set(value) {
        this.$emit('updateValue', value)
      }
    }
  }
}
</script>
<style scoped>
.mainBasicInput {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  outline: none;
}
</style>
