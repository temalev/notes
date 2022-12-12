<template>
<div class="mainBasicTextfield">
    <span class="headerBasicTextfield">
        Заголовок
    </span>
    <textarea name=""></textarea>
</div>
</template>
<script>
export default {
name: 'BasicTextfield'
}
</script>
<style scoped>
.mainBasicTextfield{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
textarea{
    resize: none;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    outline: none;
}
</style>