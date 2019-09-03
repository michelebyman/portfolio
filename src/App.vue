<template>
    <div id="app">
        <div @click="lightOnOff()" class="main-container">
            <div class="left-container nav">
                <div class="nav-container-left">
                    <div class="nav-about">
                        <router-link to="/about">About</router-link>
                    </div>
                    <div class="nav-mywork">
                        <div class="text-wrapper">
                            <router-link id="mywork-link" to="/mywork">My Work</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="center-container">
                     <div class="screen">
                        <div class="info-bar">
                            <p class="info-library">
                                Vue.js
                                <i class="fas fa-wifi"></i>
                            </p>
                            <p class="info-library">{{ time }}</p>
                            <p class="info-library">
                                100%
                                <i class="fas fa-battery-full"></i>
                            </p>
                        </div>
                        <vue-page-transition name="fade-in-up">
                            <router-view class="size" />
                        </vue-page-transition>
                        
                    </div>
                <div class="ipad">
                    <router-link to="/">
                        <div class="on-off-button">
                            <div v-if="homeScreen" class="light"></div>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="right-container nav">
                <!-- <div class="vertical-nav">
                    <router-link to="/javascript">javascript</router-link>
                </div>
                <div class="html-css">
                    <router-link to="/htmlcss">html/css</router-link>
                </div>-->

                <div class="contact">
                    <router-link id="small-link" to="/contact">Contact</router-link>
                </div>
            </div>
        </div>

        <footer class="lower-backgroundColor">
            <p class="footer-copyright">Copyright © Michele Byman</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            homeScreen: false,
            time: ""
        };
    },

    mounted() {
   setInterval(this.getTime, 1000);
    },
    methods: {
        lightOnOff() {
            if (this.$route.path != "/") {
                this.homeScreen = true;
            } else if (this.homeScreen && this.$route.path === "/") {
                this.homeScreen = false;
            }
        },
        getTime() {
            this.time = new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
                
        }
    }
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    line-height: 1.5;
    background-color: #abd2d7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

h1 {
    margin-top: 5rem;
}

h2 {
    font-weight: 300;
}

.main-container {
    display: flex;
    justify-content: center;
}

.right-container {
    /* flex: 1; */
    align-self: flex-end;
    position: relative;
    width: 19rem;
}
/* 
.vertical-nav {
    background-color: #5c6363;
    transform: rotate(65deg);
    width: 20rem;
    position: absolute;
    bottom: 12.1rem;
    left: -0.1rem;
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
}
.vertical-nav:after {
    content: "";
    position: absolute;
    background-color: #768180;
    height: 1.5rem;
    width: 1.5rem;
    right: 1rem;
    border-radius: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
}
.vertical-nav::before {
    content: "";
    position: absolute;
    background-color: #fff;
    height: 2.7rem;
    width: 2.7rem;
    right: 0;
    border-radius: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
}

.html-css {
    background-color: #645960;
    transform: rotate(90deg);
    position: absolute;
    width: 25rem;
    left: -10.2rem;
    top: -14.7rem;
    text-align: center;
} */

.contact {
    background-color: #75807d;
    width: 17.8rem;
    text-align: center;
}

.contact::after {
    content: "";
    width: 0.3rem;
    height: 100%;
    background-color: #2f5770;
    position: absolute;
    left: 0.7rem;
}
.contact::before {
    content: "";
    width: 0.3rem;
    height: 100%;
    background-color: #2f5770;
    position: absolute;
    left: 1.2rem;
}

#small-link {
    font-size: 2rem;
}

#small-link::after {
    content: "";
    width: 0.3rem;
    height: 100%;
    background-color: #2f5770;
    position: absolute;
    left: 16.8rem;
}

#small-link::before {
    content: "";
    width: 0.3rem;
    height: 100%;
    background-color: #2f5770;
    position: absolute;
    left: 16.3rem;
}

.left-container {
    width: 19rem;
    align-self: flex-end;
}
.nav-container-left {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
}

.nav-about {
    width: 23rem;
    background-color: #2f5770;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.nav-about::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 2.1rem;
    right: 2.1rem;
    background-color: #ffffff;
}

.nav-mywork {
    background-color: #645960;
    height: 3rem;
    width: 24rem;
    display: flex;
    justify-content: center;
}

#mywork-link {
    font-size: 2rem;
}

.text-wrapper {
    background-color: #4d494d;
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav a {
    font-weight: bold;
    font-size: 3rem;
    color: #fff;
    text-decoration: none;
}

.nav a:hover {
    color: #f06744;
    transition: all 0.3s ease-in;
}

.nav a.router-link-exact-active {
    color: #f06744;
    text-decoration: none;
}
.lower-backgroundColor {
    height: 15vh;
    width: 100%;
    background-color: #74a4a4;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ipad {
    background-color: #ffffff;
    height: 44rem;
    width: 37rem;
    border-radius: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -6px 56px -13px rgb(80, 80, 80);
    position: relative;
}

.screen {
    width: 35rem;
    height: 39rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55% );
    background-color: #4d494d;
    overflow: auto;
    position: absolute;
    z-index: 111;
}

.info-bar {
    color: white;
    background-color: #4d4e50;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
    position: sticky;
    padding: 0rem 1.6rem 0 1.6rem;
    top: 0px;
}
.info-bar p {
    margin: 0.5rem 0 0.5rem 0;
}

.on-off-button {
    height: 1.5rem;
    width: 1.5rem;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    bottom: -0.4rem;
    right: 50%;
    transform: translate(50%, -50%);
    cursor: pointer;
    display: grid;
    place-items: center;
}

.light {
    height: 0.5rem;
    width: 0.5rem;
    background-color: red;
    border-radius: 50%;
    animation: light 2s ease-in alternate infinite;
}


.secondary-color {
    color: #f06744;
}

.background-wrapper {
    background-color: #57585a;
    padding-left: 0.4rem;
}

.footer-copyright {
    font-size: 0.7rem;
}

.back {
        display: none;
}

@keyframes light {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/*  media query  */

@media screen and (max-width: 1025px) {
    .ipad {
            display: none;
    }
  
    .screen {
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100vh;
    
    }

    .info-bar {
        color: white;
        background-color: #4d494d;
        font-size: 0.7rem;
        display: flex;
        justify-content: space-between;
        position: sticky;
         padding: 0.5rem 1.6rem 0 1.6rem;
        top: -0.1rem;
    }
    .info-bar p {
        margin: 0rem 0rem 0.5rem 0;
    }

  

    .nav-mywork,
    .contact,
    .nav-about {
        display: none;
    }

    .lower-backgroundColor {
        display: none;

    }
}

@media screen and (max-width: 500px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (min-width: 769px) and (max-width: 1170px) {
}

@media screen and (min-width: 1171px) {
}
</style>
