export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'navBarCtrl',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ($state) {
    'ngInject';
    this.state = $state;
  }
  lauchSearch(){
    let patt = new RegExp("\w");
    let res = patt.test(this.search);
    if( !this.search && this.search.length <= 0 && !res ){
      alert("You should be write something");
    }else {
      this.state.go('app.home.search', {search: this.search});
    }
  }
}
