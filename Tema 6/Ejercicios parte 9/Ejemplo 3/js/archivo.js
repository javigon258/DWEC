{
    let objajax = $.get("kk/url-que-no-existe.html");
    objajax.error(function(){
        alert("Hubo un error");
    })
}