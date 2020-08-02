<template>
    <div>
        <div class="title">
        <h1>{{message}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: 'About page 2',
        }
    }
}
</script>

<style scoped lang="scss">
    .title{
        h1{
            color: tomato;
        }
    }
</style>