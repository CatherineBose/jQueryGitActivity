//Arena juery function
$(document).ready(function () {
    $('img').hide();

    $(beach).hover(function () {
        $(wrapper).css('background-image', "url('images/beach.jpg')");
    });
    //hover function for background opttion
    $('#planet').hover(function () {
        $('#wrapper').css('background-image', "url('images/earth.jpg')");
    });
    $('#dojo').hover(function () {
        $('#wrapper').css('background-image', "url('images/dojo.jpg')");
    });
    $('#forest').hover(function () {
        $('#wrapper').css('background-image', "url('images/forest.jpg')");
    });
    $('#matrix').hover(function () {
        $('#wrapper').css('background-image', "url('images/matrix.jpg')");
    });
    $('#snow').hover(function () {
        $('#wrapper').css('background-image', "url('images/snow.jpg')");
    });
    //click functions 
    $('#snow').click(function () {
        $('#wrapper').css('background-image', "url('images/snow.jpg')");
    });

    $(beach).click(function () {
        $(wrapper).css('background-image', "url('images/beach.jpg')");
        $(".header").html("<i>Select Players</i>");
        $("#planet, #dojo, #forest, #matrix, #snow, #beach").hide();
        $(".dropdown").show();

    });
    $(planet).click(function () {
        $('#wrapper').css('background-image', "url('images/earth.jpg')");
        $(".header").html("<i>Select Players</i>");
        $("#planet, #dojo, #forest, #matrix, #snow, #beach").hide();
        $(".dropdown").show();
    });
    $(dojo).click(function () {
        $('#wrapper').css('background-image', "url('images/dojo.jpg')");
        $(".header").html("<i>Select Players</i>");
        $("#planet, #dojo, #forest, #matrix, #snow, #beach").hide();
        $(".dropdown").show();
    });
    $('#forest').click(function () {
        $('#wrapper').css('background-image', "url('images/forest.jpg')");
        $(".header").html("<i>Select Players</i>");
        $("#planet, #dojo, #forest, #matrix, #snow, #beach").hide();
        $(".dropdown").show();
    });
    $('#matrix').click(function () {
        $('#wrapper').css('background-image', "url('images/matrix.jpg')");
        $(".header").html("<i>Select Players</i>");
        $("#planet, #dojo, #forest, #matrix, #snow, #beach").hide();
        $(".dropdown").show();
    });
    $("#leftDropdown").change(function () {
        var ninja = this.value;
        console.log("player Value Selected for right player:", ninja);
        //var ninja = $("#leftDropdown").val();
        $("#leftplayer").html('<img src="images/' + ninja + '.png">');
    });
    $("#rightDropdown").change(function () {
        var ninja = this.value;
        console.log("player Value Selected for right player:", ninja);
        //var ninja = $("#leftDropdown").val();
        $("#rightplayer").html('<img src="images/' + ninja + '.png">');
    });

});