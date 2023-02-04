var obj = document.getElementById("add-node");
obj.addEventListener("click", myFunction);

function myFunction() {
    var node = document.createElement("li");
    var textNode = document.createTextNode("Assignment 2");
    node.appendChild(textNode);
    document.getElementById("my-list").appendChild(node);

    let node2 = document.createElement("li");
    let textNode2 = document.createTextNode("Assignment 3");
    node2.appendChild(textNode2);

    document.getElementById("my-list").appendChild(node2);

    let list_items = document.querySelectorAll("li");
    for (let i = 1; i < list_items.length; i++) {
        list_items[i].className = "green";
    }
}