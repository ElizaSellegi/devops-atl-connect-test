void function() {

    var list = document.createElement("LI")
    var ele = Document.getElementById("root")

    list.innerHTML = "And hello again..."

    ele.appendChild(list)

    alert("Hello from IIFE!")

}();
