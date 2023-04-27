<template>
    <section id="navbar">
        <section id="inner-navbar">
            <section id="left-navbar">
                <section class="links"><router-link to="/home"><b id="link-text">Home</b></router-link></section>
                <section class="links"><router-link to="/CV"><b id="link-text">CV</b></router-link></section>
                <section class="links" @click="showMenu()"><b id="link-text">Hobbies</b></section>
            </section>
            <section id="right-navbar">
                <section></section>
            </section>
        </section>
    </section>
    <section class="menu-container" id="menu-container">
        <section class="menu" >
            <div><router-link to="/CV">Astronomy</router-link></div>
            <div><router-link to="/CV">Photography</router-link></div>
        </section>
    </section>
</template>

<style>
    #navbar {
        background-color: #313138;
        padding: 1%;
        border-bottom: solid white 1px;
        position: relative;
        min-height: 20px;; 
    }

    .links b {
        color: white;
        font-size: 1.2em;
    }

    .links:last-of-type:hover {
        cursor: pointer;
    }

    .menu {
        display: grid;
        grid-template-rows: 50% 50%;
        text-align: left;
        padding-left: 5%;;
        padding-bottom: 2%;
        border: solid, 1px, silver;
    }

    .menu div {
        padding: 2%;
    }

    .menu a {
        color: white;
        text-decoration: none;
        font-size: 1.2em;;
    }

    .menu-container {
        display: none;
        width: 14%;
        position: absolute;
        border: solid silver 1px;
        border-top: none;
        left: 26.5%;
        top: 7.8%;
        background-color: #313138;
        z-index: 1;
        color: white;
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

    #left-navbar a {
        text-decoration: none;
    }

    @media screen and (max-width: 1200px) {
        .menu-container {
            top: 7%;
        }
    }
    @media screen and (max-width: 1100px) {
        .menu-container {
            top: 6%;
        }
    }
    @media screen and (max-width: 900px) {
        .menu-container {
            top: 5%;
            padding: 1%;
            padding-right: 4.5%;
        }
    }

    @media screen and (max-width: 750px) {
        .menu-container {
            top: 4.5%;
            padding: 1.3%;
            padding-right: 7%;
        }
    }

    @media screen and (max-width: 600px) {
        #inner-navbar {
            display: grid;
        grid-template-columns: 70% 30%;;
        }

        .menu-container {
            top: 5.35%;
            padding: 1.3%;
            padding-right: 20%;
            left: 42.5%;
        }
    }

    @media screen and (max-width: 550px) {

        .menu-container {
            top: 5%;
            left: 50.5%;
        }
    }

    @media screen and (max-width: 450px) {
        #inner-navbar {
            display: grid;
            grid-template-columns: 99% 1%;;
        }

        .links {
            padding: 10px;
        }

        .menu-container {
            top: 5.4%;
            left: 60.5%;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                menuCounter: 0
            }
        },
        methods: {
            showMenu() {
                var menu = document.getElementById("menu-container")
                if (this.menuCounter % 2 == 0) {
                    menu.style.display = "block";
                } else {
                    menu.style.display = "none";
                }
                this.menuCounter += 1
            }
        }
    }
</script>