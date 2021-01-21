import books from "./src/stores/books"

export default class StoreResource{
    Store(Vuex){
        return{
            store: new Vuex.Store({
                modules:{
                    books
                }
            })
        }
    }
}