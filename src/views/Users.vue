<template>
    <h1>Painél administrativo</h1>
</template>

<script>
import axios from 'axios'

export default {
   created(){
       
       var req = {
           headers: {
               Authorization: "Bearer " + localStorage.getItem('token')
           }
       }
       axios.get("http://localhost:8686/user", req).then(res => {
           console.log(res);
       }).catch(err => {
           console.log(err);
       })
       console.log("Olá!")
   }
}
</script>
