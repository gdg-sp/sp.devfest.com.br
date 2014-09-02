var places = ['estacao-da-luz', 'catedral-da-se', 'masp', 'ponte-estaiada'];
var index = 1;

var loop = setInterval(function(){
    $(".place").removeClass("current-place");
    $("."+places[index++]).addClass("current-place");

    index = index == places.length ? 0 : index;
}, 7000);
