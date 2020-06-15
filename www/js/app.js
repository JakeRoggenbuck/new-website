function populate(data, id) {
    for (var i = 0; i < data.length; i++) {
        var col = document.createElement("div");
        col.setAttribute('class', 'col s12 m4');
        var ico = document.createElement("div");
        ico.setAttribute('class', 'icon-block');

        var name = document.createElement("h5");
        name.setAttribute('class', 'center');

        var desc = document.createElement("p");
        desc.setAttribute('class', 'light');

        // Create text nodes
        var nodeName = document.createTextNode(data[i]["name"]);
        var nodeDesc = document.createTextNode(data[i]["desc"]);
        // Get entrys element
        var elementEntrys = document.getElementById(id);

        // Append text nodes to elements
        name.appendChild(nodeName);
        desc.appendChild(nodeDesc);
        // Append elements to xib
        ico.appendChild(name);
        ico.appendChild(desc);
		col.appendChild(ico)
        // Append xib to entrys
        elementEntrys.appendChild(col);
    }
}
