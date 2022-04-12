<template>
  <div class="wrapper">
    <Navmenu/>
    <Hero/>
    <Columns/>
    <Footer/>
  </div>
  <router-view/>
  
</template>

<script>
import Navmenu from './components/Navmenu'
import Hero from './components/Hero'
import Columns from './components/Columns'
import Footer from './components/Footer.vue'

export default{
name:'App',
components:{
  Navmenu,
  Hero,
  Columns,
  Footer
}
}
</script>


<style>




</style>
