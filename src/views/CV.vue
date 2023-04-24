<template>
    <section id="cv-container">
        <section id="name-container"><h2>Tom O'Dwyer</h2></section>
        <section class="details-container">
            <section class="details">
                <h3>My Skills</h3>
                <div></div>
            </section>
            <section class="details">
                <h3>My Experience</h3>
            </section>
            <section class="details">
                <h3>My Education</h3>
            </section>
            <section class="details">
                Links: 
                <section>LinkedIn</section>
                <section>Github</section>
            </section>
        </section>
    </section>
</template>

<style>
    #name-container {
        padding: 2%;
    }

    #cv-container {
        background-color: #757083;
        height: 100vh;
    }

    .details-container {
        display: grid;
        grid-template-rows: 30% 30% 30% 10%;
    }

    .details {
        padding: 1%;
        border-top: solid 1px silver;
    }

</style>