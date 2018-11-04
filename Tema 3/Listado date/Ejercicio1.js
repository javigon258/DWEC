{
  let d1 = new Date();
  let d2 = new Date(2018, 11, 24, 10, 33, 30, 0);
  let d3 = new Date("December 3, 2018 11:13:00");
  let d4 = new Date(1527003831000);

  function valores(){
    document.getElementById("resp1").innerHTML = d1;
    document.getElementById("resp2").innerHTML = d2 + "<br> new Date(2018, 11, 24, 10, 33, 30, 0)";
    document.getElementById("resp3").innerHTML = d3 + "<br> new Date(\"December 3, 2018 11:13:00\")";
    document.getElementById("resp4").innerHTML = d4 + "<br> new Date(1527003831000);";

  }

  function init() {
    valores();
  }

  document.addEventListener("DOMContentLoaded", init);
}
