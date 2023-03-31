<script>
import { stringifyExpression } from '@vue/compiler-core';
import { store } from '../store.js';

export default{
    name: 'MyHeader',

    data() {
            return {
              store
            }
    },    
}


</script>

<template>
    <div>
        <input type="text" class="form-control" placeholder="Search movie" v-model="store.search"> 
    </div>
    <div>
        <button @click="$emit('SearchMovie')">cerca</button>
    </div>
</template> 

<style>

</style>