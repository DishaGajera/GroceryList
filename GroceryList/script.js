const grocery = document.getElementsByClassName("grocery"[0]);
const additem = document.getElementById("additem");
const inputid = document.getElementById("inputid");
const allitems = document.getElementById("allitems");
const list = document.getElementById("list");
const listitem = document.getElementsByClassName("listitem");
const deleteItem = document.getElementById("deleteItem");


inputid.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addItemtolist()
    }
})

function addItemtolist() {
    var li = document.createElement("li");
    var icon = document.createElement("button");
    li.setAttribute("id", inputid.value);
    li.appendChild(document.createTextNode(inputid.value));
    li.appendChild(icon)
    list.appendChild(li)
    inputid.value = "";
}

function removeItems() {
    document.getElementById("list").innerHTML = "";
}

