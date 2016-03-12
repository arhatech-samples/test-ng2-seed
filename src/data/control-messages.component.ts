import {Component, Host, Input} from 'angular2/core';
import {NgFormModel} from 'angular2/common';
import {ValidationService} from './validation.service';

@Component({
    selector: 'control-messages',
    template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessages {
    @Input() controln: string;

    constructor( @Host() private _formDir: NgFormModel) { }

    get errorMessage() {
        // Find the control in the Host (Parent) form
        let c = this._formDir.form.find(this.controln);
        // let group: Control = <Control>this._formDir.controls[this.controlg];
        // console.log('group is ');
        // console.log(group);
        // for (let propertyName in group.errors) {
        //     // If control has a error
        //     if (group.errors.hasOwnProperty(propertyName) && group.touched) {
        //         // Return the appropriate error message from the Validation Service
        //         return ValidationService.getValidatorErrorMessage(propertyName);
        //     }
        // }
        for (let propertyName in c.errors) {
            // If control has a error
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                // Return the appropriate error message from the Validation Service
                return ValidationService.getValidatorErrorMessage(propertyName);
            }
        }

        return null;
    }
}
