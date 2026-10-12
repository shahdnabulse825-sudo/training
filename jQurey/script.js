
$("#rightbtn").click(function ()
 {
    if ($("#left .small").length == 0) 
        {
        alert("There are no more boxes to move!");
    } 
    else{
        var box = $("#left .small").first();
        $("#right").append(box);
    }
}
);

$("#leftbtn").click(function ()
 {
    if ($("#right .small").length == 0) 
        {
        alert("There are no more boxes to move!");
    } 
    else{
        var box = $("#right .small").first();
        $("#left").append(box);
    }
}
);
