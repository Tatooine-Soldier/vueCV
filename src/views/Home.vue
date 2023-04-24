<template>
    <section>
        <section>
            <section class="home-section" v-for="colour,i in colorList" :key="i" :style="{backgroundColor: colour}"> 
                <router-link :to="routerList[i]" style="text-decoration: none;">
                    <p class="home-content">
                       <div class="links">{{ dataList[i] }}</div>
                    </p>
                </router-link>
            </section>
        </section>
    </section>
    <div id="copyright-line">Copyright @ Tom O'Dwyer 2023</div>
</template>

<style>
    .home-section {
        padding: 10px;
    }

    .home-content {
        color: white;
        font-size: 2em;
        text-align: center;
        text-decoration: none;; 
        padding: 20px;
    }

    .home-section:hover {
        cursor: pointer;
        transform:scaleY(1.00001);
    }

    .home-section::before {
        transform: scaleX(0);
        transform-origin: top;
    }

    .home-section:hover::before {
        transform: scaleX(1);
        transform-origin: bottom;
    }

    .home-section::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        inset: 0 0 0 0;
        background: hsl(0, 0%, 65%);
        z-index: -1;
        transition: transform .6s linear;
      }

    .links {
        color: white;   
        text-decoration: none;
    }

    #copyright-line {
        position: absolute;
        z-index: 1;
        top: 100%;
        padding-top: 4%;
        margin-left: 1%;;
        color: grey;
    }
    
</style>

<script>
    export default {
        data() {
            return {
                colorList: ["#474056", "#757083", "#8A95A5", "#B9C6AE"],
                dataList: ["Tom O'Dwyer", "My CV", "Portfolio", "About Me"],
                routerList: ["/home", "/CV", "/hobbies", "/hobbies"]
            }
        },
    }
</script>