<template>
  <div class="mainForm">
    <div class="formsContainer">
        <basicInput />
        <basicTextfield />
    </div>
    <basicButton :add-class="'fillMainAction'">
        <template slot="text">Добавить</template>
    </basicButton>
    

  </div>
</template>
<script>
export default {
    name: 'FormNotes'
}
</script>
<style scoped>
.mainForm{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.formsContainer{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
