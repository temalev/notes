<template>
  <div class="mainBtn" @click="isAction">
    <div :class="addClass">
      <slot name="text" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BasicButton',
  props: {
    addClass: {
      type: String,
      default: ''
    },
    actionBtn: {
      type: String,
      default: ''
    }
  },
  methods: {
    add() {
      console.log('hi')
    },
    isAction() {
      if (this.actionBtn === 'addNote') {
        this.$emit('isAction', 'addNote')
      } else if (this.actionBtn === 'delete') {
        this.$emit('isAction', 'deleteNote')
      } else if (this.actionBtn === 'open') {
        this.$emit('isAction', 'openNote')
      }
    }
  }
}
</script>
<style scoped>
.mainBtn {
  cursor: pointer;
  opacity: 0.6;
  transition: 0.2s;
  border: 1px solid transparent;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mainBtn:hover {
  opacity: 1;
}
.mainAction {
  padding: 5px 10px;
  border: 1px solid rgb(26, 26, 215);
  border-radius: 5px;
  color: rgb(26, 26, 215);
}
.fillMainAction {
  padding: 5px 10px;
  color: rgb(26, 26, 215);
  border: 1px solid rgb(26, 26, 215);
  border-radius: 5px;
  background-color: rgb(26, 26, 215);
  color: #fff;
}
.supportAction {
  padding: 5px 10px;
  color: rgb(228, 23, 23);
  border: 1px solid rgb(228, 23, 23);
  border-radius: 5px;
}
</style>
