<script>
import {store} from '../store.js'

export default{
    name: 'MySearchedShows',

    data() {
            return {
              store
            }
          },
          methods:{
          calcvote(vote){
            let voto = Math.ceil(vote / 2).toFixed(1) ;
            return  voto
             } 
          }
}

</script>


<template>
    <div>
        <h2 v-if="store.searchedShows.length > 0">TV Shows</h2>
    </div>
    
    <div class="box">
            <div v-for="(show) in store.searchedShows" class="show">
                <img :src="store.movieurl + show.poster_path" alt="">
                <h1>{{show.name}}</h1>
                <h3>{{show.original_title}}</h3>
                <span :class="store.standard + show.original_language"></span>
                <h4 v-text="calcvote(show.vote_average)"></h4>
            </div>
    </div>

</template>

<style scoped>
.box{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
}
h1{
 font-size: 20px;
}
h3{
    font-size: 14px;
}
span{
    align-self: center;
}
.show{
    border: solid 2px rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    width: calc(100% / 6);
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 300px;
    justify-content: space-between;
}
</style>