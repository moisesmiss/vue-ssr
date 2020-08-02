<template>
    <div>
        <h1>{{message}}</h1>
        <item-hello></item-hello>
    </div>
</template>

<script>
import ItemHello from '@/components/ItemHello'
export default {
    components: {ItemHello},
    data(){
        return {
            message: 'Hola mundo'
        }
    }
}
</script>

<style scoped>
    h1{
        color: tomato;
    }
</style>