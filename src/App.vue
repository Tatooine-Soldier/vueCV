<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <section id="app-container">
    <NavBar/>
    <section class="router">
      <router-view></router-view>
    </section>
    <!-- <div id="copyright-line">Copyright @ Tom O'Dwyer 2023</div> -->
  </section>
</template>

<style>
  #app-container {
    color: white;
  }

  body {
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
  }

  #copyright-line {
    position: absolute;
    z-index: 1;
    top: 98%;
    padding-top: 4%;
    margin-left: 1%;;
    color: grey;
}


@media screen and (max-width: 400px) {
  #copyright-line {
    margin-top: 10%;
  }
   body {
    height: 100vh;
   }
}

</style>

<script>
  export default {
    mounted() {
      this.$http.get('http://localhost:3000').then(response => console.log(response));
    }
  }
 
</script>