{
  Date.prototype.esFecha = function() {
    return this.getTime() === this.getTime();
  };

  function valores() {
    let d1 = new Date("lorjg");
    let d2 = new Date("2012/09/11");
    document.getElementById("resp").innerHTML = d1.esFecha();
    document.getElementById("resp1").innerHTML = d2.esFecha();
  }

  function init() {
    valores();
  }

  document.addEventListener("DOMContentLoaded", init);
}
