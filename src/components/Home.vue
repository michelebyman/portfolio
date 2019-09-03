<template>
    <div class="home-wrapper">
        <h1>
            Michele
            <span class="secondary-color">Byman</span>
        </h1>

        <div class="background-wrapper">
            <h2>Front-end Web Developer & Programmer</h2>
        </div>

        <div class="icons">
            <a href="https://michelebyman.github.io" target="_blank">
                <i class="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/michelebyman" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>

        <div class="apps-icons">
            <div @click="navigate($event)" class="about"></div>

            <div @click="navigate($event)" class="mywork">
                    <i class="fas fa-tasks"></i>
            </div>

            <div @click="navigate($event)" class="contact-apps"></div>
        </div>
        <div class="apps-names">
            <p class="center-text">About</p>
            <p class="center-text">My Work</p>
            <p class="center-text">Contact</p>
        </div>
    </div>
</template>

<script>
import { log } from "util";
export default {
    methods: {
        navigate(e) {       
            switch (e.target.className) {
                case "about":
                    this.$router.push("/about");
                    break;
                case "mywork":
                    this.$router.push("/mywork");
                    break;
                case "contact-apps":
                    this.$router.push("/contact");
                    break;
                case "fas fa-tasks":
                    this.$router.push("/mywork");
                    break;

                default:
                    break;
            }
        }
    }
};
</script>

<style scoped>
.home-wrapper {
    padding: 0 1.6rem 0 1.6rem;
}
a {
    color: white;
}
h2 {
    font-size: 1rem;
    font-weight: 300;
}
i {
    font-size: 1.5rem;
    margin: 0.5rem;
}

i:hover {
    color: #f06744;
    transition: all 0.3s ease-out;
}

.apps-icons,
.apps-names {
    display: none;
}

@media screen and (max-width: 1024px) {
    .apps-icons {
            margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .about,
    .mywork,
    .contact-apps {
        height: 4rem;
        width: 4rem;
        border-radius: 0.7rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .about {
     background-image: linear-gradient(to right, #2f5770, #6f97b1);
    }

    .about::after {
        content: "";
        height: 2.3rem;
        width: 2.3rem;
        border-radius: 50%;
        border: 0.08rem solid #fff;
        /* background-image: linear-gradient(-55deg, #f06744, #6f97b1); */
        background-image: url("../assets/images/portrait.jpg") ;
        background-size: 100%;
    }
    .mywork {
        background-image: linear-gradient(to bottom, #74a4a4, #b0d4d4);
        position: relative;
    }


  
    
    .contact-apps {

         background-image: linear-gradient(to top, #75807d, #c7cecc);
         position: relative;
    }

    .contact-apps::after {
           content: "";
        height: 2.3rem;
        width: 2.3rem;
        position: absolute;
        border-radius: 50%;
        background-image: linear-gradient(-65deg, rgb(255, 255, 255), #75807d);
    }

    .contact-apps::before {
           content: "C";
           color: #4d494d;
      font-weight: bold;
        z-index: 12;
    }

    .apps-names {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .center-text {
        margin: auto;
        font-size: 0.7rem;
    }

  
}
</style>