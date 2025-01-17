var ul = document.getElementById("list-cont")
var inpu = document.getElementById("input")
function add() {
    var listitem = document.createElement("li")
    listitem.innerHTML = inpu.value + "<button onclick='deleteitem(event)'>Finished</button>"
    ul.append(listitem)

}
function deleteitem(event) {
    event.target.parentElement.remove()
    alert("you completed your task")
}