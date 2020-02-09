module.exports = function(){
    return `
    <main id="main">

    <section id="profile_section_s">
        <div id="profile_upper_section">
            <div id="profile_container_d">
                <header id="profile_name_h">Kurt</header id="">
                <label id="joined_l" for="">Joined: Date</label>
                <label id="home_town_l" for="">Home Town: Town</label>
                <p id="description_p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima alias cumque temporibus
                    numquam, rem minus corrupti sequi qui officia veniam. Ratione officia autem odio deserunt
                    maiores rerum est ab!
                </p>
            </div>
            <div id="image_container_d">
                <img id="profile_image"src="../images/Livdin_Logo_Avatar.png" alt="">
            </div>
        </div>
        <div>
            <div id="reviews_r">
                <header id="reviews_here_h">You Haven't Written Any Reviews Yet</header id=""> 
            </div>
        </div>

    </section>

</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="../js/profile.js"></script>


</body>

</html>
    `;
};