jQuery(document).ready(function(){
   jQuery("a#show-panel").click(function(){
   jQuery("#lightbox-panel").fadeIn(300);
   })
   jQuery("a#close-panel").click(function(){
   jQuery("#lightbox-panel").fadeOut(300);
   })
})