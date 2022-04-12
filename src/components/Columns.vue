<template>
<div class="wrapper">
    <div class="one">
        <a><img src="../assets/images/estudar.jpeg">
        <p>Apostila de questões</p></a>
    </div>
    <div two>
         <a><img src="../assets/images/curriculo.jpg">
         <p>Vagas aviação</p></a>
    </div>
    <div class="three">
         <a><img src="../assets/images/emails.jpg">
         <p>Receba vagas e novidades por e-mail</p></a>
    </div>
</div>
    
</template>

<style scoped>
    .wrapper{
        display: flex;
        justify-content: space-around;
        align-items: center;
        
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

    *{
        height: 100vh;
    }

</style>