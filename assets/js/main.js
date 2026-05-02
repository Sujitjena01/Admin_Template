jQuery(function(){
//sidebar toggle
$('#nav-menu').bind('click', function() {
    $('#sidebar').toggleClass('sidebar-open');
    });
})
jQuery(function(){
    //sidebar toggle
    $('#nav-menu').bind('click', function() {
        $('.middle-body').toggleClass('middle-body-clicked');
    });
})
//menu toggle
$(document).ready(function() {
    $(".toggleDiv").hide();

    $(".btnToggle").click(function() {
        var div = $(this).attr("data-div");
        $("#" + div).slideToggle();

        var div1 = $(this).attr("data-chevron");
        $("#" + div1).toggleClass('chevron-rotate-down');
    });
});

//Hamburger
$(document).ready(function(){
$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
});
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})
})()



$('.three-dots').click(function() {
    $('#right').toggle('fast');
});


// Theme Color Change

$('#toggle-box-checkbox').on('change', function(){
    if(this.checked){
        var ls = document.createElement('link');
        ls.rel="stylesheet";
        ls.href="assets/css/style_dark.css";
        document.getElementsByTagName('head')[0].appendChild(ls);
    }else{
        if($("link[href*=style_dark]").length){
            $("link[href*=style_dark]").remove();
        }
    }
});
    
