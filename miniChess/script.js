function dragstart_handler(ev) {
 console.log("dragStart");
 // Change the source element's background color to signify drag has started
 console.log(ev.target);
 // Set the drag's format and data. Use the event target's id for the data
 ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}

function drop_handler(ev) {

 console.log("Drop");
 ev.preventDefault();
 // Get the data, which is the id of the drop target
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));

 // Clear the drag data cache (for all formats/types)
 ev.dataTransfer.clearData();
}
