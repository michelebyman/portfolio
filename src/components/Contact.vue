<template>
    <div class="contact-wrapper">
        <h1>
            Contact
            <span class="secondary-color">me</span>
        </h1>

        <p class="background-wrapper">Reach out to me...</p>
        <div class="email box">
            <span class="secondary-color">Email: &nbsp;</span>
            michelebyman@gmail.com
        </div>
        <div class="phone box">
            <span class="secondary-color">Phone: &nbsp;</span>
            (+46) 765-825051
        </div>
        <div class="adress box">
            <span class="secondary-color">Adress: &nbsp;</span>
            Vällduevägen 1, lgh 1002,
            352 51 Växjö,
            Sweden
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
}
</script>

<style scoped>
.back {
            display: block;
                text-align: center;
                position: absolute;
                bottom: 0;
                background: #4d494d;
                left: 50%; 
                 transform: translate(-50%, -50%) 
                
    }


.contact-wrapper {
          padding: 0 1.6rem 0 1.6rem;
}
.box {
    border: 0.1rem solid white;
    padding: 25px 15px 25px 15px;
    margin: 1rem;
    width: calc(100% - 60px);
    transition: all 0.5s ease-out;
}

.box:hover {
    padding: 10px 5px 10px 5px;
    background-color: #2f5770;
    transition: all 0.5s ease-out;
}


</style>

