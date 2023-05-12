<script >
/* eslint-disable-no-undef */

import { Loader } from '@googlemaps/js-api-loader'
import {ref, onMounted, onUnmounted} from 'vue'

const GOOGLE_MAPS_API_KEY = 'AIzaSyBkU3LEkHvrO8_kpSWGqobpFob-sESKlA8'
//const GOOGLE_MAPS_API_KEY = 'AIzaSyDTNOMjJP2zMMEHcGy2wMNae1JnHkGVvn0' 
export default {
    setup() {
        let map = ref(null)
        let destMarker = ref(null)

        let speed = ref(null)
        
        const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY})
        let mapDivHere = ref(null);
        let currPos = ref(null);
        
        onMounted(async () => {
          await loader.load() 

          drawMap()
          var refresh = document.getElementById("map-refresh-div")
          refresh.addEventListener("click", drawMap)
        })

        onUnmounted(async () => {
            
        })

        async function drawMap() {

            var res = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
            var final = await res.json()

            console.log("final", final)

            var lat = parseFloat(final.latitude)
            var lng = parseFloat(final.longitude)

            speed.value = parseFloat(final.velocity).toFixed(2)

            currPos.value = {lat: lat, lng: lng}
            map.value = new google.maps.Map(mapDivHere.value, {
                center: currPos.value,
                zoom: 5
             })
             
            updateMarker(map, lat, lng)

            // do not delete
            // setInterval(async () => {
            //     var res = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
            //     var final = await res.json()

            // var lat = parseFloat(final.latitude)
            // var lng = parseFloat(final.longitude)

            // speed.value = parseFloat(final.velocity).toFixed(2)

            // currPos.value = {lat: lat, lng: lng}
            // map.value = new google.maps.Map(mapDivHere.value, {
            //     center: currPos.value,
            //     zoom: 5
            //  })
             
            // updateMarker(map, lat, lng)

            // }, 3000)
        }

        function updateMarker(map, lat, lng) {
            destMarker.value = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                map: map.value
            })

          lat = lat.toString()
          lng =  lng.toString()
          var contentString = "<b style='color:black;'>ISS Location<br><i>Lat: "+lat+"<br>Lng: "+lng+"</i></b>"
          const issWindow = new google.maps.InfoWindow({
            content: contentString,
            ariaLabel: "ISS",
          });

          destMarker.value.addListener("click", () => {
            issWindow.open({
                anchor: destMarker.value,
                map: map.value,
                });
            });
        }


        return {currPos, mapDivHere, speed}
    },
    methods: {

    }
}
</script>


<template>
    <section class="astro-container">
        <section class="astro-heading">
            <h2>Astronomy</h2>
        </section>
        <section class="astro-content">
            <p class="astro-par">Astronomy is a past-time I've had since I was very young. My dad has many telescopes so I've had the opprotunity to play around with them over the years and I've got to see some really cool stuff.
            My favourite celestial bodies are The Andromeda Galaxy(M31) and Saturn. I also like tracking satellites passing overhead like <a hre="https://www.starlink.com/">Starlink</a> and the ISS.</p>
            <p class="astro-par">In fact, I've made my own map to live-track the ISS using the Google Maps API and a live ISS coordinate tracking API. Check it out below!</p>
            <section class="map-container">
                <div ref="mapDivHere"  id="map"/>
            </section>
            <section>
                Speed: <i>{{ speed }}</i> km/h
            </section>
            <div id="map-refresh-div" >Refresh Map</div>
        </section>
    </section>
</template>

<style>
    .astro-container {
        background-color: #474056;
        text-align: center;
        padding: 10px;
        padding-bottom: 2%;
    }

    .astro-heading h2 {
        margin-top: 0%;
        padding-top: 1%;
        text-align: center;
    }

    #map {
        border: solid silver 1px;
        width:100%; 
        height:80vh;
    }

    .astro-content {
        width: 80%;
        margin: 0 auto;
    }

    #map-refresh-div {
        width: 12%;
        color: rgb(86,86,86);
        padding: 5px;
        background-color: white;
        z-index: 1;
        position: absolute;
        top: 60%;
        margin-left: .8%;
        border: solid silver 1px;
        border-radius: 2.8px;;
    }

    #map-refresh-div:hover {
        background-color: rgb(235,235,235);
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        .astro-content {
            width: 100%;
        }

        #map {
            height:60vh;
        }

        #map-refresh-div {
            width: 20%;
            top: 70%;
            margin-left: 2.5%;
        }
    }
    
</style>