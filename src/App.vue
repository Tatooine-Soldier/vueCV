<script setup>
import NavBar from './components/NavBar.vue'
import FooterName from './components/FooterName.vue';
</script>

<template>
  <section id="app-container">
    <NavBar id="navbar"/>
    <section class="router">
      <router-view></router-view>
    </section>
    <FooterName id="footer"></FooterName>
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

#footer {
  position: relative;
  bottom: 2%;
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
   
  }
 
</script>