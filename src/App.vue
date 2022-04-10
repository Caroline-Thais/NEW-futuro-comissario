<template>
  <div id="nav">
    <Navmenu/>
  </div>
  <router-view/>
  
</template>

<script>
import Navmenu from './components/Navmenu'

export default{
name:'App',
components:{
  Navmenu
}
}
</script>


<style>

</style>
