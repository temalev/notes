<template>
  <div class="mainBasicTextfield">
    <span class="headerBasicTextfield"> Описание </span>
    <textarea v-model="model" name=""></textarea>
  </div>
</template>
<script>
export default {
  name: 'BasicTextfield',
  props: {
    valueInput: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
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
.mainBasicTextfield {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
textarea {
  resize: none;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  outline: none;
}
</style>
