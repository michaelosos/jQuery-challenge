jQuery(document).ready(function(){
    // Challenge 1: Dropdown menu
    var watch = $(".challenge1").find("nav");
    var toggleSubMenu = function(e) {
        var subList = $(this).children("ul");
        var width = $(this).outerWidth();
        subList.toggleClass("active");
        if (e.type == "mouseenter") {
            if (subList.hasClass('side-menu')) {
                subList.css('left', width+1);
            } else {
                subList.css('left', 0);
            }
        } else if (e.type === "mouseleave") {
            subList.css('left', -9999);    
        }
    };
    
    watch.on('mouseenter mouseleave', '.has-sub', toggleSubMenu);
})