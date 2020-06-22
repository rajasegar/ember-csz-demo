import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ToggleStyleComponent extends Component {
  @tracked toggle = false;

  @action 
  setToggle() {
    this.toggle = !this.toggle;
  }

}

