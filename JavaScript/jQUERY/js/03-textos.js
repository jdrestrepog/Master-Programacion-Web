$(document).ready(function(){
    reLoadList();
    $("#add_button").click(function(){
        $("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');
        reLoadList();
    });

    
});

function reLoadList(){
    $('a').each(function(){
        var that   = $(this);
        var enlace = that.attr('href');
        that.text(enlace);
    });
}