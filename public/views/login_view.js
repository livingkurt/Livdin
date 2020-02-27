module.exports = function () {
  return `
    <div class="container">
        <div class="row">
            <div class="">
                <h2 class="form_header">Login into Livdin!</h2>
                <form class="login" autocomplete="on">
                    <div class="label_input">
                        <label class="form_labels"for="exampleInputEmail1">Email address</label>
                        <input onfocus="this.placeholder = ''"type="email" class="all_inputs_i" id="email-input" onblur="this.placeholder='Email'" placeholder="Email">
                    </div>
                    <div class="label_input">
                        <label class="form_labels"for="exampleInputPassword1">Password</label>
                        <input onfocus="this.placeholder = ''"type="password" class="all_inputs_i" id="password-input" onblur="this.placeholder='Password'" placeholder="Password">
                    </div>
                    <div id="signup_or_login">
                        <button class="all_buttons_b" type="submit" href="/" class="btn btn-default">Login</button>
                       
                    <p id="or_login_p">Or sign up <a id="or_login_p"class="all_buttons_b" id=""href="/signup">here</a></p>
                </div>
                </form>
                <!-- <br /> -->
                <!-- <p>Or sign up <a href="/signup">here</a></p> -->
            
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/login.js"></script>

</body>

</html>

`;
};