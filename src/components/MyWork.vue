<template>
    <div class="mywork-wrapper">
        <h1 class="mywork">
            My
            <span class="secondary-color">Work</span>
        </h1>
        <p class="background-wrapper">Check out some of my projects... (under construction)</p>

        <div class="grid-projects">
            <div class="item">
                <a href="https://michelebyman.github.io" target="_blank" class="image-link">
                    <img src="../assets/projects/portfolio.png" alt />
                </a>
                <div class="icons">
                    <a class="btn btn-dark" href="https://github.com/michelebyman/michelebyman.github.io" target="_blank">
                        <i class="fab fa-github"> Github</i>
                    </a>

                    <a
                        class="btn btn-light"
                        href="https://michelebyman.github.io"
                        target="_blank"
                    >
                        <i class="far fa-eye"> Projects</i>
                    </a>
                </div>
            </div>
            <div class="item">
                <a href="https://michelebyman.github.io/otherProjects/chestGame/" target="_blank" class="image-link">
                    <img src="../assets/projects/chestGame.png" />
                </a>
                <div class="icons">
                    <a class="btn btn-dark" href="https://github.com/michelebyman/michelebyman.github.io/tree/master/otherProjects/chestGame" target="_blank">
                        <i class="fab fa-github"> Github</i>
                    </a>

                    <a
                        class="btn btn-light"
                        href="https://michelebyman.github.io/otherProjects/chestGame/"
                        target="_blank"
                    >
                        <i class="far fa-eye"> Projects</i>
                    </a>
                </div>
            </div>
            <div class="item">
                <a href="https://github.com/simontollstern/Brottskartan" target="_blank" class="image-link">
                    <img src="../assets/projects/brottskarta.png" alt />
                </a>
                <div class="icons">
                    <a class="btn btn-dark" href="https://github.com/simontollstern/Brottskartan" target="_blank">
                        <i class="fab fa-github"> Github</i>
                    </a>

                    <a
                        class="btn btn-light disabled"
                    >
                        <i class="far fa-eye disabled"> Projects</i>
                    </a>
                </div>
            </div>
            <div class="item">
                <a  href="https://xd.adobe.com/view/43d8fe8e-86ac-47fb-5be0-4c9209e7b08c-35e9/"
                        target="_blank" class="image-link">
                    <img src="../assets/projects/allfones.png" alt />
                </a>
                <div class="icons">
                    <a class="btn btn-dark disabled" href="https://michelebyman.github.io" target="_blank">
                        <i class="fab fa-adobe disabled"> Adobe XD</i>
                    </a>

                    <a
                        class="btn btn-light"
                        href="https://xd.adobe.com/view/43d8fe8e-86ac-47fb-5be0-4c9209e7b08c-35e9/"
                        target="_blank"
                    >
                        <i class="far fa-eye"> Projects</i>
                    </a>
                </div>
            </div>
            <div class="item">
                <a href class="image-link">
                    <img src="../assets/projects/olausfastigheter.png" alt />
                </a>
                <div class="icons">
                    <a class="btn btn-dark disabled" href="https://michelebyman.github.io" target="_blank">
                        <i class="fab fa-adobe disabled"> Adobe XD</i>
                    </a>

                    <a
                        class="btn btn-light disabled"
                       
                    >
                        <i class="far fa-eye disabled"> Projects</i>
                    </a>
                </div>
            </div>
        </div>
        <i  @click="navigate($event)" class="fas fa-h-square back"> 
                              Home</i>
    </div>
</template>

<script>
export default {
        methods: {
                  navigate() {
                this.$router.push('/')
        }
        }
};
</script>

<style scoped>
.mywork-wrapper {
    padding: 0 1.6rem 0 1.6rem;
}

  .back {
            display: block;
                text-align: center;
                position: sticky;
                bottom: 0;
                background: #4d494d;
                padding: 1rem 0rem 0.5rem 0rem;     
    }
img {
    width: 100%;
    border: 3px solid #fff;
    box-sizing: border-box;
     transition: all .3s ease-out;
}

img:hover {
        opacity: 0.7;
        transition: all .3s ease-out;
}

a {
    color: white;
}

.grid-projects {
    display: grid;
    grid-gap: 1.2rem;
    grid-template-columns: repeat(2, 1fr);
}




.btn {
    display: block;
    padding: 0.5rem 0rem 0.5rem 1rem;
    border: 0;
    margin-bottom: 0.3rem;
    width: 100%;
    transition: all ease-out 0.3s;
    box-sizing: border-box;
}
.btn:hover {
    background: #f06744;
    color: white;
}

.btn-dark {
    background: black;
    color: #fff;
}
.btn-dark:hover {
    color: black;;
}

.btn-light {
    background: grey;
    color: black;
}

a {
        text-decoration: none;
}


.disabled {
        text-decoration-line: line-through;
        pointer-events: none;
  cursor: default;
}
.disabled:hover {
        background: grey;
}
@media screen and (max-width: 500px) {
    .grid-projects {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
