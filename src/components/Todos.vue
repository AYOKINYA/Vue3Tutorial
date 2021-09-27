<template>
<div>
    {{name}}'s Todo List
    <hr/>
</div>
    
</template>

<script>

export default {
    name: 'Todos',
    props: {
        name: String
    },
}
</script>

<style scoped>

</style>