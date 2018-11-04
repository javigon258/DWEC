{

  Array.prototype.comprobaciones = function(){
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined){
            this.splice(i , 1);
        }
    }
}

  function recorrer() {
    let array1 = ['ejemplo', 'adios', undefined, 'pueblo', undefined, 'descanso'];
    let array2 = ['ejemplo', 'adios', undefined, 'pueblo', undefined, 'descanso'];

    document.getElementById('num1').innerHTML = array1;
    document.getElementById('num2').innerHTML = array2.comprobaciones() +"<br>";
  }

  function init() {
    recorrer();
  }

  document.addEventListener('DOMContentLoaded', init);
}
