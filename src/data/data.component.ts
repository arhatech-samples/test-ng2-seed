import {Component} from 'angular2/core';
import {FormBuilder, Validators, Control} from 'angular2/common';
import {ControlMessages} from './control-messages.component';
import {ValidationService} from './validation.service';

@Component({
  selector: 'demo-app',
  moduleId: module.id,
  templateUrl: './data.component.html',
  directives: [ControlMessages]
})
export class DataComponent {
  userForm: any;
  // emailGroup: any;
  nameC: Control = new Control('', Validators.required);
  emailC: Control = new Control('', Validators.compose([Validators.required, ValidationService.emailValidator]));
  emailVerC: Control = new Control('', Validators.compose([Validators.required, ValidationService.emailValidator]));

  constructor(private _formBuilder: FormBuilder) {
    this.userForm = this._formBuilder.group({
        'name': this.nameC,
        // 'match_email' : this._formBuilder.group({
          'email': this.emailC,
          'emailVer': this.emailVerC
        // }, { validator: ValidationService.groupValidator })
      },{ validator: ValidationService.groupValidator });

    // this.emailGroup = this.userForm.controls.match_email;
  }

  // matchEmail(group): any {
  //     let email = group.controls.email;
  //     let confirmEmail = group.controls.emailVer;

  //     //Don't kick in until user touches both fields   
  //     if (email.pristine || confirmEmail.pristine) {
  //       return null;
  //     }

  //     // Mark group as touched so we can add invalid class easily
  //     group.markAsTouched();

  //     if (email.value === confirmEmail.value) {
  //       return null;
  //     }

  //     return {
  //         'invalidEmailAddress': true
  //     };
  // }

  saveUser() {
      if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }
}
