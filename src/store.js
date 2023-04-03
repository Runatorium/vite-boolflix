import { reactive } from 'vue';
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle'

export const store = reactive(
    {
        searchedShows: [],
        searchedMovie: [],
        standardpng: "../public/1647381392_lostark-clase-pistolera.png",
        movieurl: "http://image.tmdb.org/t/p/w500/",
        standard: "fi fi-",
        search: '',
    }
);