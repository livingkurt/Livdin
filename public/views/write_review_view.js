module.exports = function(){
    return `
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h2 class="form_header">Write a review for this property!</h2>
                <form class="signup">
                    <div class="">
                        <label id="review_address" class="form_labels"for="exampleInputUsername1">Address</label>
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputPassword1">Overall Rating Out of 5</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="rating-input" onblur="this.placeholder='Rating'" placeholder="Rating">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputUsername1">Detailed Review</label>
                        <textarea style="height:200px" onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="review-input" onblur="this.placeholder='Review'" placeholder="Review"></textarea>
                    </div>
                    <div class="">
                        <label id="review_id" class="form_labels"for="exampleInputPassword1">User ID</label>
                    </div>
                    <button style="margin-top:10px" id="submitBtn" class="all_buttons_b" type="submit" class="btn btn-default">Submit Review</button>
                </form>
                <br>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/write_review.js"></script>
</body>
</html>
`;
};

// <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="address-input" onblur="this.placeholder='Address'" placeholder="Address">
// <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="user-input" onblur="this.placeholder='User ID'" placeholder="User ID"></input>