$(function () {

    $.fn.formularioValidar = function () {
        let formulario = {
            nombre: [/^([a-zA-Z]{5,}\s?)$/, "El valor minimo debe tener 5 caracteres."],
            apellidos: [/^([a-zA-Z]{5,}\s?){1,5}$/,"El valor minimo de 5 caracteres, y un apellido."],
            email: [/^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/, "Un ejemplo de correo: ejemplo@gmail.com"],
            mensaje: [/^^.{20,}$/, "El contenido del mensaje debe tener 20 caracteres como minimo."],
            valida(texto, expresion) {
                return formulario[expresion][0].test(texto);
            }
        }  
        let $valores = $("input[type=text], textarea");
        let errInput = [];

        $valores.blur(function (e){
            e.preventDefault();
            let inputPatron = $(this).attr("tipo");
            let valorForm = $(this).val();
            if(formulario.valida(valorForm, inputPatron)){
                $(this).css({
                    "background-color": "#b3f29f",
                    color: "#32771d",
                    border: "3px solid #32771d"
                });
            }else{
                $(this).css({
                    "background-color": "#ef9292",
                    color: "#b20c0c",
                    border: "3px solid #b20c0c"
                });
                errInput.push($(this));
            }
        });

        $valores.focus(function (e) { 
            e.preventDefault();
            $(this).css({
                color: "black",
                border: "2px solid #ffDEDE"
            });
        });

        return this;
    }(jQuery);
});