<template>
<div class="mainBasicInput">
    <span class="headerBasicInput">Описание</span>
    <input type="text">
</div>
</template>
<script>
export default {
name: 'BasicInput'
}
</script>
<style scoped>
.mainBasicInput{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
input{
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    outline: none;
}
</style>