<template>
  <div class="wrapper">
    <Navmenu/>
    <Hero/>
  </div>
  <router-view/>
  
</template>

<script>
import Navmenu from './components/Navmenu'
import Hero from './components/Hero'

export default{
name:'App',
components:{
  Navmenu,
  Hero
}
}
</script>


<style>




</style>
