<template>
<body>
    <div>
        <div id="content">
            
            
            <div id="form">
                <!--<div class="columns is-multiline is-mobile">-->
                    <!--<div class="column is-one-quarter">-->
                        <div class="control">
                            <div v-if="error != undefined">
                                <div class="notification is-danger">
                                <p>{{error}}</p>
                                </div>
                            </div>
                            <h2>Nome:</h2>
                            <input class="input" type="text" placeholder="Nome" v-model="name">
                            <h2>Email:</h2>
                            <input class="input" type="email" placeholder="E-mail" v-model="email">
                            <h2>Senha:</h2>
                            <input class="input" type="password" placeholder="Senha" v-model="password"><hr>
                            <div class="control">
                                <button class="button is-info" @click="register">Cadastrar</button>
                            </div>
                        </div>
            </div>
            <div id="art">
                <h1>Junte-se a nós e garanta sua vaga!</h1>
                <router-link to="/" class="back"><h4>Voltar para Home</h4></router-link>
            </div>
        </div>
        
    </div>
    </body>    
</template>

<script>
import axios from 'axios'

export default{
  data(){
      return{
        name: '',
        email: '',
        password: '',
        error: undefined,
      }     
  },
  methods:{
    register(){
       axios.post("http://localhost:8686/user", {
           name: this.name,
           password: this.password,
           email: this.email
            }).then(res => {
                console.log(res);
                this.$router.push({name: 'Cadastro'});
                }).catch(err => {
                var msgErro = err.response.data.err;
                this.error = msgErro;
            })
        }
    }
}
</script>

<style scoped>

.navbar{
    display: none;
}
#content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    gap: 2%;
}

body{
    background-image: url("../assets/images/Telegram.jpg");
    height: 100vh;

}

h1{
    font-size: large;
    font-weight: bold;
}

#form{
    background-color: #ffffff21;
    padding: 4%;
    border-radius: 2%;

}

.back{
    text-align: end;
}

</style>
