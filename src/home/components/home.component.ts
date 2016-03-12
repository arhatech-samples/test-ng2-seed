import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Control, Validators} from 'angular2/common';
// import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {NameListService} from '../../shared/services/name-list.service';

@Component({
  selector: 'sd-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class HomeComponent {
  // public dt:Date = new Date();
  // public minDate:Date = null;
  // public opened: boolean;
  form: any;
  nameControl: Control = new Control('', Validators.required);
  newName: string;
  constructor(public nameListService: NameListService, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
    'name': this.nameControl
    });
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

  // validateMe(control: Control) {}

  // public open() {
  //   this.opened = !this.opened;
  // }
}
