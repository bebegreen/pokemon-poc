import './editItem.scss';
import template from './editItem.html';

class EditItemCtrl {
  constructor(dashboardService) {
    'ngInject';
    this.dashboardService = dashboardService;

  }

  $onInit() {
    const { modifier_groups_id } = this.item;
    this.allModifiers = this.dashboardService.getModifiers();

    // devide modifiers to current and optional
    this.modifiers = this.allModifiers.reduce((accum, modifier) => {

      modifier_groups_id.indexOf(modifier.id) >= 0 ?
        accum.currentModifiers.push(modifier) :
        accum.optionalModifiers.push(modifier)
      return accum;

    }, { currentModifiers: [], optionalModifiers: [] })
  }

  showOptions(modifierId) { 
    this.modifierOptions = this.allModifiers.find(({id}) => id === modifierId).options; 
  }

  handleClick(e) {
    e.stopPropagation()
  }
}

const EditItem = {
  bindings: { item: '<' },
  controller: EditItemCtrl,
  template
}

export default EditItem;