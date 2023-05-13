  <template>
   <section class="portfolio-container">
        <section>
            <div><h2>Photography:</h2></div>
            <section>
                <section class="photo-grid">
                    <section class="photo-cols">Astronomy Gallery
                        <section class="obiwan-photos">
                            <img src="../assets/obiSave.jpg" id="obi1" class="obi-class" @click="fullImage('obi1')"/>
                            <img src="../assets/obiSave.jpg" id="obi2" class="obi-class" @click="fullImage('obi2')"/>
                            <img src="../assets/obiSave.jpg" id="obi3" class="obi-class" @click="fullImage('obi3')"/>
                        </section>
                    </section>

                    <section class="photo-cols">Natural Gallery
                        <section class="obiwan-photos">
                            <img src="../assets/obiSave.jpg" id="obi1" class="obi-class" @click="fullImage('obi1')"/>
                            <img src="../assets/obiSave.jpg" id="obi2" class="obi-class" @click="fullImage('obi2')"/>
                            <img src="../assets/obiSave.jpg" id="obi3" class="obi-class" @click="fullImage('obi3')"/>
                        </section>
                    </section>
                    <section class="photo-cols">City Gallery
                        <section class="obiwan-photos">
                            <img src="../assets/obiSave.jpg" id="obi1" class="obi-class" @click="fullImage('obi1')"/>
                            <img src="../assets/obiSave.jpg" id="obi2" class="obi-class" @click="fullImage('obi2')"/>
                            <img src="../assets/obiSave.jpg" id="obi3" class="obi-class" @click="fullImage('obi3')"/>
                        </section>
                    </section>
                </section>
            </section>
            <section class="modal" id="modal">
                <section class="modal-content" id="modal-content">
                    <span class="close-modal" @click="hidemodal()">&times;</span>
                    <img src="../assets/obiSave.jpg" id="obimodal"/>
                </section>
            </section>
        </section>
    </section>
</template>

<style>

.modal {
    display: none;
    position: fixed;
    padding-top: 10%;;
    z-index: 4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: auto auto;
    border: 1px solid #888;
}

.close-modal {
    color: silver;
    position: fixed;
    margin-left: 1%;
    font-size: 2.5em;;
}

.close-modal:hover {
    cursor: pointer;
}

.obiwan-photos {
    margin-top: 5%;;
    position: relative;
}

.obiwan-photos img {
    height: 30%;
    width: 32%;
    border: solid 1px silver;
    position: relative;
}

.obiwan-photos img:hover {
    filter: brightness(70%);
    cursor: pointer;
}

.photo-grid {
    display: grid;
    grid-template-columns: 33% 33% 33%;
}


#obi1 {
    z-index: 1;
    left: 22%;
    top: 10px;
}

#obi2 {
    z-index: 2;
    right: 6%;
    bottom: 0px;;
}

#obi3 {
    z-index: 3;
    right: 34%;
    bottom: 10px;;
}

#obimodal {
    height: 100%;
    width: 100%;
}

.modal-content {
    height: 65%;
    width: 68%;
}

@media (max-width: 600px) {
    .photo-grid {
        grid-template-columns: 100%;
        grid-template-rows: auto;
        row-gap: 15%;;
    }

    .obiwan-photos {
        margin-top: 0%;
        padding: 4%;
    }

    .photo-cols {
        border: none;
    }

    .modal-content {
        height: 35%;
        width: 90%;
    }

    .modal {
        padding-top: 35%;;
    }
    
}

</style>

<script>

export default {
        data() {
            return {
            }
        },
        methods: {
            fullImage(img) {
                var m = document.getElementById("modal")
                var mc = document.getElementById("modal-content")
                m.style.display = "block"
                    switch(img) {
                        case "obi1":
                            console.log("obi1");
                            break
                        case "obi2":
                            console.log("obi2"); 
                            break  
                        case "obi3":
                            console.log("obi3");
                            break   
                    }
            },
            hidemodal() {
                var m = document.getElementById("modal")
                m.style.display = "none"
            }
        }
    }
</script>