{
    $(function(){
        $("form").validarRegex();
    });

    $("input[type=submit]").click(function (e) {
        e.preventDefault();
        errInput = [];
        let $inputs = $valores;
        $inputs.blur();
        //console.log(errInput);
        if(errInput.length>0)
            errInput[0].focus();
        $.ajax({
            url: "datos.txt",
            dataType: "text",
            success: function (response) {
                $("textarea").val(response);
            }
        });
    });
}