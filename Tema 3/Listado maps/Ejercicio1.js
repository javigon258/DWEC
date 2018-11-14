{

  function informacion(){

    map1 = new Map();
    map1.set("foo", true);
    o = { foo: true };

    let apar2 = document.getElementById('apar2');
    apar2.innerHTML = " <br> map1.set('foo',true);";
    let apar3 = document.getElementById('apar3');
    apar3.innerHTML = map1.get("foo");
    let apar4 = document.getElementById('apar4');
    apar4.innerHTML = map1['foo'];
    let apar5 = document.getElementById('apar5');
    apar5.innerHTML = map1.foo;
    let apar6 = document.getElementById('apar6');
    apar6.innerHTML = {'foo':true};
    let apar7 = document.getElementById('apar7');
    apar7.innerHTML = o['foo'];
    let apar8 = document.getElementById('apar8');
    apar8.innerHTML = o.foos;

  }

  function init() {
    informacion();
  }

  document.addEventListener("DOMContentLoaded", init);
}
