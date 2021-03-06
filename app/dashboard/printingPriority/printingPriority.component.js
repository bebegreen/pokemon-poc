import template from './printingPriority.html';
import './printingPriority.scss';


const PrintingPriority = {
  bindings: {
    data: '<'
  },
  // controller: PrintingPriorityCtrl,
  template: `
  
    <h2>
      printing priorities
    </h2>
    <div 
      class='priorityBox' 
      ng-repeat="priority in $ctrl.data"
    >
      <h3>{{ priority.title }}</h3>
      <drop-zone data='priority.data'></drop-zone>
    </div>
  `
}

export default PrintingPriority;