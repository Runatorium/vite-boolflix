import { reactive } from 'vue';
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle'

export const store = reactive(
    {
        searchedShows: [],
        searchedMovie: [],
        search: '',
    }
);