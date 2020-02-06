module.exports = function(){
    return `
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h2 class="form_header">Sign up for Livdin!</h2>
                <form class="signup">
                    <div class="">
                        <label class="form_labels"for="exampleInputEmail1">Username</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="" onblur="this.placeholder='Username'" placeholder="Username">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputEmail1">Email address</label>
                        <input onfocus="this.placeholder = ''"type="email" class="all_inputs_i" id="email-input" onblur="this.placeholder='Email'" placeholder="Email">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputPassword1">Password</label>
                        <input onfocus="this.placeholder = ''"type="password" class="all_inputs_i" id="password-input" onblur="this.placeholder='Password'" placeholder="Password">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputPassword1">Re-type Password</label>
                        <input onfocus="this.placeholder = ''"type="password" class="all_inputs_i" id="password-input" onblur="this.placeholder='Re-Type Password'" placeholder="Re-Type Password">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputPassword1">Name</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="password-input" onblur="this.placeholder='Name'" placeholder="Name">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputEmail1">Hometown</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="email-input" onblur="this.placeholder='Hometown'" placeholder="Hometown">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputEmail1">Bio</label>
                        <textarea onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="email-input" onblur="this.placeholder='Bio'" placeholder="Bio"></textarea>
                    </div>
                    <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span> <span class="msg"></span>
                    </div>
                    <div id="signup_or_login">
                        <button class="all_buttons_b" type="submit" class="btn btn-default">Sign Up</button>
                        <p id="or_login_p">Or log in <a id="or_login_p"class="all_buttons_b" id=""href="/login">here</a></p>
                    </div>
                    
                </form>
                <br />
                
            </div>
        </div>
    </div>
    <footer id="footer">

    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/signup.js"></script>

</body>

</html>

`;
};