module.exports = function () {
  return `
    <main id="main">
        <section>
            <div>
                <div id="name_logo">
                    <img id="logo" src="../images/Livdin_Logo_blue.png" alt="">
                    <header>Livdin</header>
                </div>
            </div>
            <p id="description_p">
                Find, Review and Share your Living Experiences
            </p>
            <form id="search_form_f" autocomplete="on">
                <input onfocus="this.placeholder = ''" onblur="this.placeholder='Address, Neighborhood, City, County'" type="text" name="" id="search_i" placeholder="Address, Neighborhood, City, County">
                <button target="_self" id="search_b">Search</button>
            </form>
        </section>

    </main>
    <script src="../js/index.js"></script>
</body>

</html> 
`;
};

{/* <a class="nav_link" href="/map">Search</a> */ }