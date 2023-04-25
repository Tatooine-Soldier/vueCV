<template>
    <section id="navbar">
        <section id="inner-navbar">
            <section id="left-navbar">
                <section class="links"><router-link to="/home"><b id="link-text">Home</b></router-link></section>
                <section class="links"><router-link to="/CV"><b id="link-text">CV</b></router-link></section>
                <section class="links"><router-link to="/hobbies"><b id="link-text">Hobbies</b></router-link></section>
            </section>
            <section id="right-navbar">
                <section></section>
            </section>
        </section>
    </section>
</template>

<style>
    #navbar {
        background-color: #313138;
        padding: 1%;
        border-bottom: solid white 1px;
        z-index: 1;
    }

    .links b {
        color: white;
        font-size: 1.2em;
    }

    #link-text {
        text-decoration: none;
    }

    #inner-navbar {
        display: grid;
        grid-template-columns: 40% 60%;;
    }

    #left-navbar {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        #inner-navbar {
            display: grid;
        grid-template-columns: 70% 30%;;
        }
    }

    @media screen and (max-width: 400px) {
        #inner-navbar {
            display: grid;
            grid-template-columns: 99% 1%;;
        }

        .links {
            padding: 5px;
        }
    }
</style>