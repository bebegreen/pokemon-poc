import template from './printingPriority.html';
import './printingPriority.scss';

class PrintingPriorityCtrl {
  constructor() {
    'ngInject';
    this.state = [
      { title: 'first', data: [] },
      { title: 'second', data: [] },
      { title: 'third', data: [] }
    ];
  }

  handleDrop(index, external, type, callback) { 
    console.log(index, external, type, callback)
    return true; 
  }


}

const PrintingPriority = {
  bindings: {

  },
  controller: PrintingPriorityCtrl,
  template
}

export default PrintingPriority;