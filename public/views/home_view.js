module.exports = function(props){
    return `
    <main id="main">
        <section>
            <div>
                <header>Livdin</header>
            </div>
            <p id="description_p">
                Find, Review and Share your Living Experiences
            </p>
            <form action="/search.html" id="search_form_f" autocomplete="on">
                <input onfocus="this.placeholder = ''" type="text" name="" id="search_i"
                    placeholder="Address, Neighborhood, City, County">
                <button id="search_b">Search</button>
            </form>
        </section>

    </main>
    <footer id="footer">

    </footer>
    <script src="../js/index.js"></script>
</body>

</html>
`
};