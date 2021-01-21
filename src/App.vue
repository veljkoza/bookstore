<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HelloWorld,
  },
  beforeCreate() {
    console.log(process.env.API_URL);
    // let url = `volumes?q=drini&maxResults=25`;
    // apiCall.get(url)
    // .then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
    let payload = {
      url: `volumes`,
      options: {
        q: "drini",
        maxResults: 25,
      },
    };
    this.$store
      .dispatch("books/loadBooks", payload)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
