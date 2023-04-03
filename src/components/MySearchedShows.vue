<script>
import {store} from '../store.js'

export default{
    name: 'MySearchedShows',

    data() {
            return {
              store
            }
          },
}

</script>


<template>
    <div>
        <h2 v-if="store.searchedShows.length > 0">TV Shows</h2>
    </div>
    
    <div class="box">
            <div v-for="(show) in store.searchedShows" class="show">
                <h1>{{show.name}}</h1>
                <h3>{{show.original_title}}</h3>
                <p>{{show.original_language}}</p>
                <h4>{{show.vote_average}}</h4>
            </div>
    </div>

</template>

<style scoped>
.box{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
}
.show{
    border: solid 2px rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    width: calc(100% / 6);
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>