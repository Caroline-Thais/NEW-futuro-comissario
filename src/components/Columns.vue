<template>
<div>
    <h1>Aqui você encontra Vagas na Aviação e Simulados ANAC.</h1>

<div class="wrapper">
    <div class="one">
        <router-link to="/ebook"><img src="../assets/images/estudar.jpeg">
        <p>Seu e-book de questões</p></router-link>
    </div>
    <div two>
         <router-link to="/vagas"><img src="../assets/images/curriculo.jpg">
         <p>Vagas aviação</p></router-link>
    </div>
    <div class="three">
         <a><img src="../assets/images/emails.jpg">
         <p>Receba vagas e novidades por e-mail</p></a>
    </div>
</div>
</div>    
</template>



<style scoped>
    .wrapper{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 5%;
    }
        /* Medium screens */
        @media all and (max-width: 800px) {
        .wrapper {
            /* When on medium sized screens, we center it by evenly distributing empty space around items */
            justify-content: space-around;
        }
        }

        /* Small screens */
        @media all and (max-width: 500px) {
        .wrapper {
            /* On small screens, we are no longer using row direction but column */
            flex-direction: column;
        }
}

    img{
        height: 20em;
        width: 20em;
        border-radius: 50%;
        margin-top: 15%;

    }
    
    p{
        text-align: center;
        color: rgb(61, 61, 167);
        font-size: large;
        margin-top: 5%;
    }   

    h1{
        text-align: center;
        font-size: x-large;
        margin-top: 2%;
        }

</style>