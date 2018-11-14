{

  function realizar() {
    let obj = {};
    let conObj = new WeakSet([obj, obj]);
    let solo = new WeakSet([{}, {}]);

    // No puedes saber el tamaño de un WeakSet ya que su contenido son referencias de memoria
  }

  function init() {
    realizar();
  }

  document.addEventListener("DOMContentLoaded", init);
}
