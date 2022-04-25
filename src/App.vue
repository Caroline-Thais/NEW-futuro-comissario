<template>
  <div class="wrapper">
  <Navmenu class="navbar"/>
  
 
 <router-view/>
  </div>
</template>

<script>
import Navmenu from './components/Navmenu.vue'


export default{
name:'App',

components:{
  Navmenu
}
}
</script>


<style>




</style>
