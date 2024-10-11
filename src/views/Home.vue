<script setup lang="ts">

</script>

<template>
    <section id="location">
        <div class="container">
            <div class="content">
                <div class="img">
                    <img src="/src/assets/images/illustration-intro.png" alt="">
                </div>
                <div class="any_text">
                    <h1>All your files in one secure location,<br>accessible anywhere.</h1>
                    <p>Fylo stores all your most important files in one secure location. <br> Access them wherever
                        you need, share and collaborate with <br>friends family, and co-workers.
                    </p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    </section>
    <section id="feature">
        <div class="container">
            <div class="content">
                <div class="item_list">
                    <div class="item">
                        <img src="/src/assets/images/icon-access-anywhere.svg" alt="">
                        <h3>Access your files, anywhere</h3>
                        <p>The ability to use a smartphone, tablet, or computer to access your account means your
                            files follow you everywhere.
                        </p>
                    </div>
                    <div class="item">
                        <img src="/src/assets/images/icon-security.svg" alt="">
                        <h3>Security you can trust</h3>
                        <p>2-factor authentication and user-controlled encryption are just a couple of the security
                            features we allow to help secure your files.
                        </p>
                    </div>
                    <div class="item">
                        <img src="/src/assets/images/icon-collaboration.svg" alt="">
                        <h3>Real-time collaboration</h3>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration.
                            No email attachments required.
                        </p>
                    </div>
                    <div class="item">
                        <img src="/src/assets/images/icon-any-file.svg" alt="">
                        <h3>Store any type of file</h3>
                        <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for
                            all
                            file types to be securely stored and shared.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="stay">
        <div class="container">
            <div class="content_stay">
                <div class="stay_img">
                    <img src="/src/assets/images/illustration-stay-productive.png" alt="">
                </div>
                <div class="stay_text">
                    <h2>Stay productive,
                        wherever you are
                    </h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your
                        file
                        storage needs.
                    </p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No
                        email
                        attachments required.
                    </p>
                    <div class="link">
                        <a href="">See how Fylo works</a>
                        <img src="/src/assets/images/icon-arrow.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="team">
        <div class="container">
            <div class="content_team">
                <img src="/src/assets/images/bg-quotes.png" alt="">
                <div class="team_item_list">
                    <div class="team_item">
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                            team has become a well-oiled collaboration machine.
                        </p>
                        <div class="user">
                            <img src="/src/assets/images/profile-1.jpg" alt="">
                            <div class="user_info">
                                <h5>Satish Patel</h5>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div class="team_item">
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                            team has become a well-oiled collaboration machine.
                        </p>
                        <div class="user">
                            <img src="/src/assets/images/profile-2.jpg" alt="">
                            <div class="user_info">
                                <h5>Bruce McKenzie</h5>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div class="team_item">
                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our
                            team has become a well-oiled collaboration machine.
                        </p>
                        <div class="user">
                            <img src="/src/assets/images/profile-3.jpg" alt="">
                            <div class="user_info">
                                <h5>Iva Boyd</h5>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sign">
                    <h3>Get early access today</h3>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                        questions, our support team would be happy to help you.
                    </p>
                    <div class="field">
                        <input type="text" placeholder="email@exemple.com">
                        <button>Get Started For Free</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="vide">

    </section>
</template>

<style scoped>
#location {
    width: 100%;
    padding-bottom: 50px;
}

.container {
    max-width: 1044px;
    margin: 0 auto;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    align-items: center;
}

.img {
    width: 500px;
    padding: 0;
}

.img img {
    width: 100%;
}

.any_text {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

p {
    color: hsla(0, 0%, 100%, 0.733);
    font-size: 15px;
}

button {
    /* background-color: hsl(198, 60%, 50%); */
    padding: 10px 30px;
    border: none;
    border-radius: 20px;
    color: #fff;
    background: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%) );
}

#feature,
#stay,
#team {
    padding: 90px 0;
    width: 100%;
}

.item {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
}

.item h3,
.item p {
    margin: 0;
}

.item_list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 70px;
    justify-content: center;
    padding-top: 50px;
    align-items: center;
}

.content_stay {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.stay_img {
    width: 500px;
}

.stay_img img {
    width: 100%;
    height: 100%;
}

.stay_text {
    width: 470px;
    text-align: start;
}

h2 {
    font-size: 40px;
}

.stay_text .link a {
    color: hsl(176, 68%, 64%);
}

.link {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 0;
    border-bottom: 1px solid hsl(176, 68%, 64%);
    width: 165px;
}

.content_team {
    width: 100%;
}

.team_item_list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    position: relative;
    bottom: 13px;
}

.team_item {
    width: 298px;
    background-color: hsl(219, 30%, 18%);
    padding:  20px;
    border-radius: 7px;
    padding-top: 5px;
}
.user{
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
}
.user img{
    border-radius: 40px;
    width: 10%;
}
.user_info h5, .user_info p{
    margin: 0;
}
.user_info p{
    font-size: 12px;
}
#sign{
    width: 60%;
    background-color: hsl(217, 28%, 15%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 25px;
    gap: 20px;
    position: relative;
    top: 170px;
    left: 185px;
    border-radius: 10px;

}
h3{
    margin: 0;
}
p{
    margin: 0;
}
.field{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
}
input{
    border: none;
    outline: none;
    color: grey;
    padding: 10px 30px;
    width: 45%;
    border-radius: 20px;
}
#vide{
    width: 100%;
    height: 150px;
    background-color: hsl(216, 53%, 9%);
}
</style>