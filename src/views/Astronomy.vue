<style>
    .astro-container {
        background-color: #474056;
        text-align: center;
        padding: 10px;
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

    @media screen and (max-width: 600px) {
        .astro-content {
            width: 100%;
        }

        #map {
            height:60vh;
        }
    }
    
</style>

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
        
        const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY})
        let mapDivHere = ref(null);
        let currPos = ref(null);
        
        onMounted(async () => {
          await loader.load() 

          var res = await fetch("http://api.open-notify.org/iss-now.json")
          var final = await res.json()

          var lat = parseFloat(final.iss_position.latitude)
          var lng = parseFloat(final.iss_position.longitude)
          console.log(lat, lng)

          currPos.value = {lat: lat, lng: lng}
          map.value = new google.maps.Map(mapDivHere.value, {
            center: currPos.value,
            zoom: 5
          })

          destMarker.value = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                map: map.value
            })

          const issWindow = new google.maps.InfoWindow({
            content: "ISS Location",
            ariaLabel: "ISS",
          });

          destMarker.value.addListener("click", () => {
            issWindow.open({
                anchor: destMarker.value,
                map,
                });
            });
        })

        onUnmounted(async () => {
            
        })
        return {currPos, mapDivHere}
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
            <p class="astro-par">In fact, I've made my own map to track the ISS using the Google Maps API and a live ISS coordinate tracking API. Check it out below!</p>
            <section class="map-container">
                <div ref="mapDivHere"  id="map"/>
               
            </section>
        </section>
    </section>
</template>