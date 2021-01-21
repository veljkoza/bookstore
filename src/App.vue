<template>
  <div v-if="isLoading">Loading...</div>
  <div id="app" class="bg-red-500 h-screen w-full flex flex-wrap p-10" v-else>
    <book-card v-for="book in books" :key="book.id" :book="book"></book-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BookCard from './components/books/BookCard'
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    BookCard,
  },
  
  created(){
    let payload = {
      url: `volumes`,
      options: {
        q: "drini",
        maxResults: 25,
      },
    };
    try{
      this.loadBooks(payload).then(res=>console.log(res)).catch(err=>console.log(err))
    }catch(err){
      console.log(err.message)
    }
  },
  methods: {
    ...mapActions("books", ["loadBooks"]),
  },
  computed:{
    ...mapGetters('books',['books']),
    ...mapGetters('books',['isLoading'])
  }
};
</script>

<style>

</style>
