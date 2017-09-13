var pieces = document.querySelectorAll('.piece');
var cells = document.querySelectorAll('.cell');
var dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);

}


function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;

}

function handleDragEnter(e) {
  //this / e.target is the current hover target
  this.classList.add('over');
}

function handleDragLeave(e) {
  //this / e.target is previous target element
  this.classList.remove('over');
}

function handleDrop(e) {
  //this / e.target is current target element
  if (e.stopPropagation) {
    e.stopPropagation(); //stops the browswer from redirecting
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node
  [].forEach.call(pieces, function(piece) {
    piece.classList.remove('over');
  });
}

var pieces = document.querySelectorAll('.piece');
[].forEach.call(pieces, function(piece) {
  piece.addEventListener('dragstart', handleDragStart, false);
  piece.addEventListener('dragenter', handleDragEnter, false);
  piece.addEventListener('dragover', handleDragOver, false);
  piece.addEventListener('dragLeave', handleDragLeave, false);
  piece.addEventListener('drop', handleDrop, false);
  piece.addEventListener('dragend', handleDragEnd, false);
});
