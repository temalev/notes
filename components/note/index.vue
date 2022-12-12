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
        v-for="btn in buttons"
        :key="`button_${btn}`"
        :add-class="btn.class"
        :action-btn="btn.action"
      >
        <template slot="text">{{ btn.name }}</template>
      </basicButton>
    </div>
  </div>
</template>
<script>
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
