import template from './dropZone.html'; 
import './dropZone.scss'; 

class DropZoneCtrl { 

}

const DropZone = { 
  bindings: { 
    data: '<'
  }, 
  controller: DropZoneCtrl,
  template
}

export default DropZone;