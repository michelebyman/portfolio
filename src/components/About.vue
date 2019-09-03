<template>
    <div class="about">
        <h1>
            About
            <span class="secondary-color">Me</span>
        </h1>
        <p class="background-wrapper">Some things I want to share with you...</p>
        <div class="grid-about">
            <img src="../assets/images/portrait.jpg" alt />

            <div class="bio">
                <h2 class="secondary-color">BIO</h2>
                <p>My name is Michele Byman and I am studying to become a front-end developer in Växjö a small town in the south east of Sweden. I am probably not the typical programer out there, I have a background in sales and in the health field. I am a social guy with lots of interest in skateboarding, health and meditation beside my interest to be a good developer. I love solving problems so my brain gets to work intensely!</p>
            </div>

            <div class="job job-1">
                <h3>Student @ EC-Education</h3>
                <h6>Front-End Developer</h6>
                <p>
                    Currently I am studying to become a front-end developer.
                    <br />
                </p>
                <p>Classes I have taken:</p>
                <ul>
                    <li>APIs for Backend</li>
                    <li>Advanced JavaScript with React</li>
                    <li>Advanced JavaScript with Angular</li>
                    <li>Basic JavaScript with jQuery</li>
                    <li>Communication &amp; Agile Project Methods</li>
                    <li>UX Design &amp; Graphic Imaging</li>
                    <li>HTML5 &amp; CSS3 with SEO</li>
                </ul>
            </div>
            <div class="job job-2">
                <h3>Life Hälsokostbutik</h3>
                <h6>Sales Representative</h6>
                <p>As a sales representative at Life I sold (health product) and educated people in the health field.</p>
            </div>
            <div class="job job-3">
                <h3>Rawsome Experience</h3>
                <h6>Owner</h6>
                <p>
                    Traveled the world educated people how to live a healthy lifestyle, wrote an
                    <a
                        class="eBook"
                        href="https://drive.google.com/open?id=15mbbKbUjxWnxinD8kO_JIYTvcv6Gibg2"
                        target="_blank"
                    >e-book</a>
                </p>
            </div>
        </div>
    </div>
</template>


<script>
export default {};
</script>

<style scoped>
.about {
    padding: 0 1.6rem 0 1.6rem;
}
.grid-about {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
        "bioimage bio bio"
        "job1 job1 job1"
        "job2 job2 job2"
        "job3 job3 job3";
    grid-gap: 1rem;
    margin-bottom: 4rem;
}

img {
    border-radius: 50%;
    border: 0.175rem solid #f06744;
    height: 8rem;
    grid-area: bioimage;
    margin: auto;
}

.bio {
    grid-area: bio;
}

.job-1 {
    grid-area: job1;
}
.job-2 {
    grid-area: job2;
}
.job-3 {
    grid-area: job3;
}

.job {
    background: #6b6b6b;
    padding: 0.5rem;
    border-right: #f06744 5px solid;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-out;
}

.job:hover {
    background: #414040;
}

.eBook {
    color: #f06744;
}
.eBook:hover {
    color: #fff;
}

@media screen and (max-width: 1000px) {
    .grid-about {
        grid-template-areas:
            "bioimage bioimage bioimage"
            "bio bio bio"
            "job1 job1 job1"
            "job2 job2 job2"
            "job3 job3 job3";
    }
    img {
    margin-top: 1rem;
}
}



@media screen and (min-width: 1024px){

         .grid-about {
       grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
            "bioimage bio bio "
            "job3 job1 job1"
            "job2 job2 job2";
}
}
</style>