<template>
    <section class="not-page-container">
        <section class="not-page-inner">
            <div id="not-page-home"><router-link to="/home">&lt; Home</router-link></div>
            <div class="obiwan-display">
                <div><b>THIS IS NOT THE PAGE YOU'RE LOOKING FOR...</b></div>
                <div class="obiwan-container"><img src="../assets/obiSave.jpg" id="obiwan"/></div>
            </div>
        </section>
    </section>
</template>

<style>
    .not-page-container {
        height: 100vh;
        background-color: #8A95A5;
    }

    .not-page-inner {
        padding: 1em;
    }

    #obiwan {
        width: 40%;
        height: 25%;;
        border: solid #B9C6AE .2em;
        box-shadow: .3em .5em .5em #5e5e5e;
    }

    .obiwan-display {
        padding-top: 4%;
        text-align: center;
        margin: auto auto;
        font-size: 2em;
    }

    .obiwan-container {
        margin: 1em 0em;
    }

    #not-page-home a {
        color: white;
        text-decoration: none;
    }

    #not-page-home a:hover {
        color: #B9C6AE;
    }

    @media screen and (max-width: 550px) {
        #obiwan {
            width: 90%;
            height: 65%;;
        }

        .obiwan-display {
            padding-top: 15%;
            font-size: 1.5em;;
        }
    }
</style>


