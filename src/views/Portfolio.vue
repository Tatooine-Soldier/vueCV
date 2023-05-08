<template>
    <section class="portfolio-container">
        <section>
            <p>I have completed various projects, both personal and college-related.</p> 
            <p>Below I've linked my Github where the source code for my projects can be viewed and my CV:</p>
            <div>
                <ul>
                    <li><a href="https://github.com/Tatooine-Soldier">Github</a></li>
                    <li><router-link to="/CV">CV</router-link></li>
                </ul>
            </div>
        </section>
    </section>
</template>

<style>
    .portfolio-container {
        background-color: #757083;
        padding-top: 2em;
        text-align: center;
        height: 100vh;;
    }

    p {
        margin: 0px;
        padding-bottom: 1em;;
    }

    .portfolio-container li {
        list-style: none;
        font-size: 1.2em;;
        padding: .5em;
        
    }

    .portfolio-container li a {
        color: white;
    }

    .portfolio-container li a:hover {
        color: silver;
    }
   

</style>