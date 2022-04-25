<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        
        <router-link to="/">
            <img src="../assets/logo2.png">
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        <router-link to="/" class="navbar-item">
            Home
        </router-link>
        <router-link to="/vagas" class="navbar-item">
            Vagas
        </router-link>

        <router-link to="/questoes" class="navbar-item">
            Questões Anac
        </router-link>

        <router-link to="/ebook" class="navbar-item">
            E-book
        </router-link>

        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <router-link to="/register" class="button is-info">
                <strong>Cadastre-se</strong>
            </router-link>
            <router-link to="/login" class="button is-info">
                Log in
            </router-link>
            </div>
        </div>
        </div>
    </div>
    </nav>

</template>