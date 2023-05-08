<template>
    <section id="cv-container">
        <section id="name-container"><h2>Tom O'Dwyer</h2></section>
        <section class="details-container">
            <section class="details">
                <div class="header-with-button">
                    <h3>My Skills</h3> <span><div id="skills"></div></span>
                </div>
                <div class="skills-container" id="skills-container">
                    <section>
                        <h4>Python</h4>
                        <section class="skill-paragraph">
                            Python was the first programming language I learned. It was also my chosen language to complete both personal and college projects. It is the programming language I am most comfortable with using. <br>Here is a link to an <a href="https://github.com/Tatooine-Soldier/Team3Shop"> E-commerce project</a> site I carried out using the Python web framework Flask.
                        </section>
                    </section>
                    <section>
                        <h4>Golang</h4>
                        <section class="skill-paragraph">
                            I have used Golang more recently both during my internhip and during my final year college project, mostly for handling endpoints and performing database operations. I am still learning but I know more than the average Go novice.
                        </section>
                    </section>
                    <section>
                        <h4>HTML/CSS/JavaScript</h4>
                        <section class="skill-paragraph">
                            I learned HTML and CSS online when I was in school. I still enjoy creating cool websites (like this website) using HTML/CSS. I've become more familiar with Javascript too, particularly Javascript frameworks Vue and React which I've used in past projects. 
                        </section>
                    </section>
                    <br>
                    <p>Below I've ranked my strongest and weakest skills by colour: </p>
                    <section class="skills-container">
                        <section class="skill-paragraph">
                            <div class="gradient-container">
                                <span class="weak-strong">Weak</span><span class="ability-gradient"></span><span class="weak-strong">Strong</span>
                            </div>
                            <ul>
                                <li>Python <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[0]}"></span></li>
                                <li>Golang <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[2]}"></span></li>
                                <li>HTML/CSS <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[1]}"></span></li>
                                <li>Java <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[2]}"></span></li>
                                <li>Vue JS <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[0]}"></span></li>
                                <li>React JS <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[3]}"></span></li>
                                <li>SQL <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[1]}"></span></li>
                                <li>Mongo <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[2]}"></span></li>
                                <li>Git <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[2]}"></span></li>
                                <li>Docker <span class="s-ability-gradient" :style="{backgroundColor: rangeColors[3]}"></span></li>
    
                            </ul>
                        </section>
                    </section>  
                </div>
            </section>
            <section class="details">
                <div class="header-with-button">
                    <h3>My Experience</h3> <span><div id="exp"></div></span>
                </div>
                <div class="skills-container">
                    <section>
                        <h4>Lab-Demonstrator, UCC, <i>Jan-Mar 2023</i></h4>
                        <section class="skill-paragraph">
                            I worked as a lab demonstrator for about 10 weeks in UCC. This was for the module "Information and Storage Management 2" module. I had completed this course myself when I was in second year so I was pretty 
                            familiar with the contents of the course. My role was to help students with querires about the labsheet questions and to invgilate an exam the class participated in and assist the lecturer with any other tasks. The contents of the course 
                            included building and executing SQL and MongoDB database operations along with Neo4J and working with cloud databases using Azure. I enjoyed this a lot!
                        </section>
                    </section>
                    <section>
                        <h4>Technical Intern, Teamwork, <i>Mar-Aug 2022</i></h4>
                        <section class="skill-paragraph">
                           I completed a 6 month internship at <a href="https://www.teamwork.com/">Teamwork</a>. Teamwork offers a product management tool with various features enabling the resourceful management of client workloads. My responsibility here was to work on backend infrastructure such as creating/handling endpoints using Golang net/http, 
                           contributing to Inbox v2 and performing CRUD database operations with SQL. I also initially completed a Golang LinkedIn learning course to learn as much Golang as possoble before working with the codebase. My experience here was very beneficial. I improved my skills using 
                           Golang, Git and Docker as well learning how to work following Agile methodology with my team.  
                        </section>
                    </section>
                    <section>
                        <h4>Bar Server, Langton's Bar Kilkenny, <i>Jul-Dec 2021</i></h4>
                        <section class="skill-paragraph">
                           My work here was not career-orientated. I worked here full-time and then part-time to earn money for university and I mostly served drinks to customers or pulled pints.
                           I learned a lot working in a fast paced environment and I developed a lot of interpersonal skills that I still posess today. This job was probably the <b>most stressful</b> job I've ever had.
                        </section>
                    </section>
                    <section>
                        <h4>Bar Server, Mountain View, <i>Oct 2018 - Mar 2020</i></h4>
                        <section class="skill-paragraph">
                            This was my first proper job. I worked here first during school and then during college. I has to help serve food and drinks to customers and cleanup the restaurant after events. 
                        </section>
                    </section>
                </div>
            </section>
            <section class="details">
                <div class="header-with-button">
                    <h3>My Education</h3> <span><div id="edu"></div></span>
                </div>
                <section>
                    <h4>University College Cork, <i>2019-2023</i></h4>
                    <section class="skill-paragraph">
                        I studied BSc Computer Science here in UCC. I learned a lot in UCC and I thought the campus was amazing.
                    </section>
                </section>
                <section>
                    <h4>St Kieran's College, <i>2013-2019</i></h4>
                    <section class="skill-paragraph">
                        I went secondary school here and enjoyed my time here. I completed my Junior and Leaving Certificates here. 
                    </section>
                </section>
            </section>
            <section class="details">
                <!-- <a id="LINKS"></a> -->
                Links: 
                <ul>
                    <li><section class="links"><a href="https://www.linkedin.com/in/tod11/">LinkedIn</a></section></li>
                    <li><section class="links"><a href="https://github.com/Tatooine-Soldier">Github</a></section></li>
                </ul>
            </section>

            <section class="jump-to-container" id="jump-to-container" @click="showJumps">&lt;
            </section>
            <section id="jump-list">
                <div id="jump-to-header">Jump to:</div>
                <ul>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#exp">Experience</a></li>
                    <li><a href="#edu">Education</a></li>
                    <li><a href="#links">Links</a></li>
                </ul>
            </section>

        </section>
    </section>
</template>

<style>
    .jump-to-container {
        display: none;
    }

    #jump-list {
        display: none;
    }

    #jump-to-header {
        padding-top: 2%;
        text-align: center;
        text-decoration: underline;
    }

    .ability-gradient {
        background: linear-gradient(to right, #FF0000, #0000FF);
        padding: 3%;
        padding-right: 40%;
        border: solid .5px silver;
    }

    .s-ability-gradient {
        padding: 1%;
        float: right;
        padding-right: 10%;
        margin-right: 70%; 
        border: solid .5px silver;
    }

    .gradient-container {
       padding: 5%;
    }

    .weak-strong {
        padding: 0% 2%;
        text-decoration: underline;
    }

    .weak-strong:first-of-type {
        text-decoration-color: #FF0000;
    }


    .weak-strong:last-of-type {
        text-decoration-color: #0000FF;
    }

    .skill-paragraph li {
        padding: 1%;
    }

    .links {
        padding: 2%;
    }

    .links a {
        color: white;
    }

    #name-container {
        padding: 2%;
        text-align: center;
    }

    #cv-container {
        background-color: #757083; 
        height: auto;
    }

    .details-container {
        display: grid;
        grid-template-rows: auto auto auto auto;
    }

    .details {
        padding: 1%;
        border-top: solid 1px silver;
        min-height: 200px;
    }

    .details:first-of-type {
        padding-bottom: 4%;;
    }

    .skill-paragraph {
        padding-left: 5%;
        padding-right: 5%;;
    }

    h4 {
        padding-left: 3%;
    }

    .header-with-button {
        display: grid;
        grid-template-columns: 40% 60%;;
    }

    .expand-CV {
        display: none;
     }

 

     @media screen and (max-width: 600px) {
        .s-ability-gradient {
            padding: 3%;
            float: right;
            padding-right: 10%;
            margin-right: 50%; 
            border: solid .5px silver;
        }

        .jump-to-container {
            display: block;
            right: 4%;
            bottom: 3%;
            border-radius: 15px;
            padding: 5%;
            border: solid 1px silver;
            border-radius: 10px;;
            background-color: #474056;
            position: fixed;
        }

        #jump-list {
            right: 4%;
            bottom: 10%;
            padding: .5%;
            width: 40%;
            position: fixed;
            background-color: #474056;
            color: white;
            border: solid 1px silver;
        }

        #jump-list li {
            padding: 5.5% 0%;
            text-decoration: none;
            
        }

        #jump-list li a {
            color: white;
            text-decoration: none;;
        }

        jump-list li a:hover {
            color: #757083;
        }
     }

    @media screen and (max-width: 400px) {
        .expand-CV {
            display: block;
            margin-top: 4%;
            padding: 5%;
            border: solid .5px silver;
            border-radius: 10px;;
            float: right;
            margin-right: 50%;
            color: #474056;
         }

         .details {
            padding: 1%;
            border-top: solid 1px silver;
            overflow-y:scroll;
        }

        .colorBlock {
            width: 10px;
        }

        .jump-to-container {
            display: block;
            right: 4%;
            bottom: 3%;
            border-radius: 15px;
            padding: 5%;
            border: solid 1px silver;
            border-radius: 10px;;
            background-color: #474056;
            position: fixed;
        }

        #jump-list {
            right: 4%;
            bottom: 10%;
            padding: .5%;
            width: 40%;
            position: fixed;
            background-color: #474056;
            color: white;
            border: solid 1px silver;
        }

        #jump-list li {
            padding: 5.5% 0%;
            text-decoration: none;
            
        }

        #jump-list li a {
            color: white;
            text-decoration: none;;
        }

        jump-list li a:hover {
            color: #757083;
        }
    }

</style>

<script>
export default {
    data() {
      return {
        counter: 0,
        jumpCounter: 0,
        rangeColors: ["#0000FF", "#4A49D3", "#7A49C0", "#BE254B " ,"#FF0000"]
      }
    },
    methods: {
        expand(div) {
            var s = document.getElementsByClassName("details");;
            var skillsDiv = s[0]
            var experienceDiv = s[1]
            var educationDiv = s[2]
            var but = document.getElementsByClassName("expand-CV")
            if (this.counter % 2 == 0) {
                switch(div) {
                    case "skills":
                        but[0].value = "Hide"

                        skillsDiv.style.overflowY = "visible"
                        experienceDiv.style.visibility = "hidden"
                        educationDiv.style.visibility = "hidden"
                        break;
                    case "exp":
                        but[1].value = "Hide"

                        skillsDiv.style.visibility = "hidden"
                        experienceDiv.style.overflowY = "visible"
                        educationDiv.style.visibility = "hidden"
                        break;
                    case "education":
                        but[2].value = "Hide"

                        skillsDiv.style.visibility = "hidden"
                        experienceDiv.style.visibility = "hidden"
                        educationDiv.style.overflowY = "visible"
                        break;
                    default:
                        console.log("overflow")
                }
            } else {
                switch(div) {
                    case "skills":
                        but[0].value = "Expand"

                        skillsDiv.style.overflowY = "scroll"
                        experienceDiv.style.visibility = "visible"
                        educationDiv.style.visibility = "visible"
                        break;
                    case "exp":
                        but[1].value = "Expand"

                        skillsDiv.style.visibility = "visible"
                        experienceDiv.style.overflowY = "scroll"
                        educationDiv.style.visibility = "visible"
                    case "education":
                        but[2].value = "Expand"

                        skillsDiv.style.visibility = "visible"
                        experienceDiv.style.visibility = "visible"
                        educationDiv.style.overflowY = "scroll"
                    default:
                        console.log("overflow")
                }
            }
            this.counter += 1;
        },
        showJumps() {
            var dot = document.getElementById("jump-to-container")
            var l = document.getElementById("jump-list");
            if (this.jumpCounter % 2 == 0) {
                l.style.display = "block"
                dot.innerHTML = ">"
            } else {
                l.style.display = "none"
                dot.innerHTML = "<"
            }
            this.jumpCounter += 1;
        }
    }
}


</script>