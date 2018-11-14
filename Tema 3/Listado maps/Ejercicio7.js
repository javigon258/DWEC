{
/*
Array.push(), es más rápido
Set.add(), es más lento

Array.for(), es más rápido
Set.forOf(), es más lento

Array.slice(), es mucho más lento
Set.delete(), es mucho más rápido */
function informacion(){
  let apar1 = document.getElementById('apar1');
  apar1.innerHTML = " <br> Array.push(), es más rápido "
                  + " <br> Set.add(), es más lento";
  let apar2 = document.getElementById('apar2');
  apar2.innerHTML = " <br> Array.for(), es más rápido "
                  + " <br> Set.forOf(), es más lento";
  let apar3 = document.getElementById('apar3');
  apar3.innerHTML = " <br> Array.slice(), es mucho más lento "
                  + " <br> Set.delete(), es mucho más rápido";
}

function init() {
  informacion();
}

  document.addEventListener("DOMContentLoaded", init);
}
