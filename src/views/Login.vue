<template>
<body>
    <div>
        <Navmenu/>
        <div id="content">
            <div id="art">
                <div id="images">
                    <img id="fundo" src="../assets/images/bg.jpg">
                </div>

            </div>
            
            <div id="form">
                <div class="control">
                    <div v-if="error != undefined">
                        <div class="notification is-danger">
                            <p>{{error}}</p>
                        </div>
                    </div>
                    <h2>Email:</h2>
                    <input class="input" type="email" placeholder="E-mail" v-model="email">
                    <h2>Senha:</h2>
                    <input class="input" type="password" placeholder="Senha" v-model="password"><hr>
                    <div class="control">
                    <button class="button is-info" @click="login">Entrar</button>
                    <router-link to="/register" id="registrar"><p>Faça seu cadastro</p></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </body>  
</template>

<script>
import Navmenu from '../components/Navmenu.vue'
import axios from 'axios'

export default{
  Navmenu,
  data(){
      return{
        email: '',
        password: '',
        error: undefined,
      }     
  },
  methods:{
    login(){
      axios.post("http://localhost:8686/login", {
          password: this.password,
          email: this.email
            }).then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                this.$router.push({name: 'Home'});
            }).catch(err => {
                var msgErro = err.response.data.err;
                this.error = msgErro;
            })
        }
    }
}
</script>

<style scoped>
#content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

#form{
    margin-top: 10%;
}

</style>
