{
  palarr = ["uno", "dos", "tres", "cuatro"];

  function logArrayElements(element, index, palarr) {
    document.getElementById("parr").innerHTML = "a[" + index + "] = " + element;
    palarr.forEach(logArrayElements);
  }

  function init() {
    logArrayElements();
  }

  document.addEventListener("DOMContentLoaded", init);

  /**
   * palarr = ['uno', 'dos', 'tres', 'cuatro'];
   * function logArrayElements(element, index, palarr) {
   *       console.log("a[" + index + "] = " + element);
   *   }
   *   palarr.forEach(logArrayElements);
   */
}
