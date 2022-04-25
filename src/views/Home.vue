<template>
  <div class="wrapper">
    <Hero/>
    <Columns/>
    <Footer/>
  
 
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Columns from '../components/Columns.vue'
import Footer from '../components/Footer.vue'

export default{
name:'App',
components:{
  Hero,
  Columns,
  Footer
}
}
</script>


<style>




</style>
