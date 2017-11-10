class HomeCtrl {
  constructor($state) {
    'ngInject';
    this._$state = $state; 

 
  }

  handleGetStarted() { 
    this._$state.go('resMenu')
  }
}

export default HomeCtrl;
