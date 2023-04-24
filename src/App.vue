<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <section id="app-container">
    <NavBar/>
    <section>
      <router-view></router-view>
    </section>
      
  </section>
</template>

<style>
  #app-container {
    background-color: rgb(70, 8, 131);
  }

  body {
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
  }

</style>

<script>
  export default {
    mounted() {
      this.$http.get('http://localhost:3000').then(response => console.log(response));
    }
  }
 
</script>