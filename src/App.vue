
<template>
  <MyHeader @SearchMovie="doSearch"></MyHeader>
    <MySearchedMovie></MySearchedMovie>
    <MySearchedShows></MySearchedShows>
</template>




<script>
import MainBody from './components/MainBody.vue'
import MyHeader from './components/MyHeader.vue';
import MySearchedMovie from './components/MySearchedMovie.vue';
import MySearchedShows from './components/MySearchedShows.vue';
import { store } from './store.js';
import axios from 'axios'

export default{ 
      components: {
        MainBody,
        MyHeader,
        MySearchedMovie,
        MySearchedShows,
      },

      data() {
           return {
              store
              
            }
          },
          
          async mounted(){
              try { 
                    const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cfa9c9067bc907e38a40f33250b3a14d&query=avatar`);
                    this.store.searchedMovie = result.data.results;
                    console.log('valerio è il migliore')
                   }  catch(e){
                       console.log(e)
                  }
            },
          methods:{

          async  doSearch(){
                  try { 
                    const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cfa9c9067bc907e38a40f33250b3a14d&query=${this.store.search}`);
                    this.store.searchedMovie = result.data.results;
                    
                   }  catch(e){
                       console.log(e)
                  }
                  
                  try { 
                    const resultshow = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=${this.store.search}`);
                    this.store.searchedShows = resultshow.data.results;
                    this.store.search = "";
                    
                   }  catch(e){
                       console.log(e)
                  }
              },
              checklang(toCheck){
            if(toCheck == 'en'){
                toCheck = 'gb'
            }else if(toCheck == 'ja'){
                toCheck = 'jp'
            }
            return toCheck;
          },
               
        }
  }


</script>

<style lang="scss">

@use './styles/general.scss'  

</style>
