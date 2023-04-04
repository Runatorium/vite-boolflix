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
    <div class="header">
        <div class="logo">
            <img id="size-adjustment" src="../../public/Boolflix.svg" alt="">
        </div>
        <div class="search">
            <input @keyup.enter="$emit('SearchMovie')" type="text" class="form-control" placeholder="Search movie" v-model="store.search"> 
        </div>
    </div>
</template> 

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    height: 100px;
}
#size-adjustment{
    position: relative;
    height: 200px;
    width: 200px;
}
.search{
    margin-right: 20px;
}

</style>