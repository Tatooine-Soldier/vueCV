  <template>
   <section class="portfolio-container">
        <section>
            <div><h2>Photography:</h2></div>
            <section>
                <section>Astronomy Gallery
                    <section class="obiwan-photos">
                        <img src="../assets/obiSave.jpg" id="obi1"/>
                        <img src="../assets/obiSave.jpg" id="obi2"/>
                        <img src="../assets/obiSave.jpg" id="obi3"/>
                    </section>
                </section>

                <section>Natural Gallery</section>
                <section>City Gallery</section>
            </section>
        </section>
    </section>
</template>

<style>
.obiwan-photos {
    width: 40%;;
    margin: 0 auto;
    padding: 5%;
    position: relative;
}

.obiwan-photos img {
    height: 6%;
    width: 18%;
    border: solid 1px silver;
    position: relative;
}

#obi1 {
    z-index: 1;
}

#obi2 {
    z-index: 2;
    right: 20%;
    bottom: 5px;;
}

#obi3 {
    z-index: 3;
    right: 40%;
    bottom: 10px;;
}


</style>