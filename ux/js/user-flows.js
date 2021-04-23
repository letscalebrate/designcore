function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

function ondragleaveTW (draggableElement, dropzoneElement) {
    dropzoneElement.classList.remove('drop-target')
    draggableElement.classList.remove('can-drop')
    //draggableElement.textContent = 'Dragged out'
    dropzoneElement.style.opacity = 0.2;
    let colorBC = draggableElement.dataset.origbc;
    let colorS = draggableElement.dataset.origs;
    let textOG = draggableElement.dataset.textog;
    draggableElement.style.backgroundColor = colorBC;
    draggableElement.style.borderColor = colorS;
    draggableElement.style.color = textOG;
}

function ondragenterTW (draggableElement, dropzoneElement) {
    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    //draggableElement.textContent = 'This fits here ';
    dropzoneElement.style.opacity = 1;
    let color = draggableElement.dataset.color;
    let scolor = draggableElement.dataset.scolor;
    let textNew = draggableElement.dataset.textcol;
    draggableElement.style.backgroundColor = color;
    draggableElement.style.borderColor = scolor;
    draggableElement.style.color = textNew;
}

// START
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#play-box1',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:
  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
        
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    ondragenterTW(draggableElement, dropzoneElement)
    
  },
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    // remove the drop feedback style
    ondragleaveTW(draggableElement, dropzoneElement)
  },
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped'
      event.relatedTarget.classList.remove('drag-drop')
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

// TAP
interact('.dropzone2').dropzone({
  // only accept elements matching this CSS selector
  accept: '#play-box2',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:
  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
        
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    ondragenterTW(draggableElement, dropzoneElement)
    
  },
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    // remove the drop feedback style
    ondragleaveTW(draggableElement, dropzoneElement)
  },
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped'
      event.relatedTarget.classList.remove('drag-drop')
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

// INTERACTION
interact('.dropzone3').dropzone({
  // only accept elements matching this CSS selector
  accept: '#play-box3',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:
  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
        
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    ondragenterTW(draggableElement, dropzoneElement)
    
  },
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    // remove the drop feedback style
    ondragleaveTW(draggableElement, dropzoneElement)
  },
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped'
      event.relatedTarget.classList.remove('drag-drop')
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

// FINISHED
interact('.dropzone4').dropzone({
  // only accept elements matching this CSS selector
  accept: '#play-box4',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:
  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
        
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    ondragenterTW(draggableElement, dropzoneElement)
    
  },
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    // remove the drop feedback style
    ondragleaveTW(draggableElement, dropzoneElement)
  },
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped'
      event.relatedTarget.classList.remove('drag-drop')
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })
  