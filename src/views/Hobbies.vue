<template>
    <section class="portfolio-container">
        <section class="hobby-container">
            <div><h2>About Me:</h2>
            <p>My name is Tom and I am 22 years old. I currently live in Kilkenny, Ireland. I enjoy listening to music and my favourite subjects in school were Geography and Irish. I am graduating from my Computer Science course this year September, 2023 (CV linked below). My hobbies include Astronomy and photography (linked below).</p>
            </div>
            <div>
                <ul>
                    <li><router-link to="/astronomy">Astronomy</router-link></li>
                    <li><router-link to="/photography">Photography</router-link></li>
                    <li><router-link to="/CV">CV</router-link></li>
                </ul>
            </div>
        </section>
    </section>
</template>

<style>
    .hobby-container ul{
        margin-right: 2em;
    }

</style>