// white container change color : black;

$("#white").mouseover(function() {
    $("#white").css("color", "black");
    $("#black").css("background-color", "white");
});

//black container change background : black;
$("#black").mouseover(function() {
    $("#white").css("color", "white");
    $("#black").css("background-color", "black");
});