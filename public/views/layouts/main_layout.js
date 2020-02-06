module.exports = function(body,button,name){
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="../stylesheets/style.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Darker+Grotesque|Julius+Sans+One|Sulphur+Point&display=swap"
            rel="stylesheet">
        <script src="https://kit.fontawesome.com/cc10a71280.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Biryani:900|Jaldi:700&display=swap" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <title>Livdin</title>
    </head>
    
    <body>
        <div id="nav">
            <div class="topnav">
                <a href="/"><img src="" alt=""><img id="livdin_logo" src="../images/Livdin Logo_white.png" alt=""></a>
                <div id="right_side_nav">
                    <a class="nav_links" href="/map">Discover</a>
                    <a class="nav_links" href="/invite-friends">Invite Friends</a>
                    <a class="nav_links" href="/${button}">${name}</a>
                </div>
    
            </div>
        </div>
        ${body}
`;
};

{/* <a href="/"><i id="home_icon" class="fas fa-home"></i></a> */}