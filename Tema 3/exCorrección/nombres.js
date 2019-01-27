/**
 * Introduce tu nombre y apellidos separados por coma.
 * Al perder el foco se limpiará la caja de texto y aparecerán en los div indicados.
 * En caso de no cumplirse el formato se lanzará una excepción con el objeto predefinido JavaScript. 
 * En tal caso se mostrará el mensaje de error.
 * Para extraer nombre y apellidos usa los grupos de las expresiones regulares y el destructuring. 
 * También al devolver los valores.
 * Valores válidos: 
 *      Peláez del Cariño, Rocío
 *      Redondo Carrillo, Manuela
 *      Carrillo, Manuela
 *      Carrillo       ,      Manuela
 * Valores inválidos
 *      1 2, 3
 *      Carrillo, Manuela Fernández, Antonio
 * @mlmc    
 */
{
    let spanError, divNombre, divApellidos, cajaTexto;
    let patronApellidosNombre = "^((?:[a-záéíóúñ]{1,})(?:[ ]{1,}(?:[a-záéíóúñ]{1,}))*)"+
                                "[ ]*,[ ]*"+
                                "([a-záéíóúñ]{1,})$";
    let regexApellidosNombre = new RegExp(patronApellidosNombre, 'i');
    let nombres = new Set();
    
    /**
     * Almacena elementos del árbol DOM y asocia manejadores de eventos para dar funcionalidad
     */
    function init() {
        spanError = document.getElementById("spanError")
        divNombre = document.getElementById("idNombre");
        divApellidos = document.getElementById("idApellidos");
        cajaTexto = document.getElementById("idCajaTexto");

        document.getElementById("idAtras").addEventListener("click", atras);
        cajaTexto.addEventListener('blur', analizarTexto);
    }
    
    /**
     * Vuelve a la página anterior
     * @param {*} event 
     */
    function atras(event) {
        event.preventDefault();
        history.back();
    }

    /**
     * Analiza el texto introducido en la caja de texto. 
     * Actualiza el árbol dom informando de lo introducido
     */
    function analizarTexto(){
       try{

            let texto = cajaTexto.value;
            let [nombre, apellidos] = extraerNombreApellidos(texto);
            
            if (nombres.has(nombre + " " + apellidos))
                spanError.innerHTML = "REPETIDO";
            else 
                spanError.innerHTML = '';

            nombres.add(nombre + " " + apellidos);

            divNombre.innerHTML = 'Nombre: '+ nombre;
            divApellidos.innerHTML = 'Apellidos: ' + apellidos;
            cajaTexto.value='';
            
        }catch(e){
            divNombre.innerHTML = 'Nombre: ' ;
            divApellidos.innerHTML = 'Apellidos: ';
            spanError.innerHTML = e.message;
        }
    }
    /**
     * Devuelve el nombre y los apellidos extraídos del texto enviado como parámetro
     * 
     * @param {Cadena de donde extraer los apellidos y el nombre} texto 
     * @throws Error cuando el formato no es correcto
     */
    function extraerNombreApellidos(texto) {
        try {
            let [, apellidos, nombre] = regexApellidosNombre.exec(texto.trim());
            return [nombre, apellidos.replace(/[ ]+/g, " ")];//quita más de un espacio y lo sustituye por uno solo. 

        } catch (error) {
            throw new Error('Error. Formato correcto: Cuadrado Perfecto, Anacleto');
        }
        
    }
    document.addEventListener('DOMContentLoaded', init);
}