
<template>
  <MyHeader @SearchMovie="doSearch"></MyHeader>
  <MySearchedMovie></MySearchedMovie>
</template>




<script>
import MainBody from './components/MainBody.vue'
import MyHeader from './components/MyHeader.vue';
import MySearchedMovie from './components/MySearchedMovie.vue';
import { store } from './store.js';
import axios from 'axios'

export default{ 
      components: {
        MainBody,
        MyHeader,
        MySearchedMovie,
      },

      data() {
           return {
              store
              
            }
          },
          methods:{
          async  doSearch(){
                  try { 
                    const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cfa9c9067bc907e38a40f33250b3a14d&query=${this.store.search}`);
                    this.store.searchedMovie = result.data.results;
                    this.store.search = "";
                    console.log(result.data.results);
                   }  catch(e){
                       console.log(e)
                  }
              },
        }
  }


</script>

<style lang="scss">

@use './styles/general.scss'  

</style>
