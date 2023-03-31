<script>
import MainComponent from './components/MainComponent.vue'
import { store } from './store.js';
import axios from 'axios'

export default{ 
      components: {
        MainComponent,
      },
  
      data() {
           return {
              store
              
            }
          },
}

</script>

<template>
  <h1>{{ store.API }}</h1>

</template>

<style scoped>

</style>
