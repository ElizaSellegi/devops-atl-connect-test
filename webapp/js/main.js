(function aLittleIIFEFunction () {

    var list = document.createElement("li");
    var ele = Document.getElementById("root");

    list.innerHTML = "And hello again...";

    ele.appendChild(list);

    alert("Hello from IIFE!");

}());
