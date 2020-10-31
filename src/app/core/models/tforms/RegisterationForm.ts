import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class t_register {

    constructor(private _fb: FormBuilder) {

    }

    createLocationForm(): FormGroup {
        let locationForm: FormGroup = this._fb.group({
            Name: [''],
            RollNo: [''],
            Class: [''],
            MobileNo: ['']
        })
        return locationForm;
    }

    createRegisterForm(): FormGroup {

        const registerForm: FormGroup = this._fb.group({

            email: new FormControl('', [Validators.email, Validators.required]),
            password: new FormControl('', [Validators.required, Validators.maxLength(8)]),
            mobile: new FormControl('', [Validators.required, Validators.minLength(11)]),
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            userGender: new FormControl('', [Validators.required]),
            locationName: new FormControl('', Validators.required),
            userHours: new FormControl('', Validators.required),
            deliveryNoDelivery: new FormControl('', Validators.required),
            tradeMobileNumber: new FormControl(''),
            Name: new FormControl('', Validators.required),
            RollNo: new FormControl('', Validators.required),
            Class: new FormControl('', Validators.required),
            MobileNo: new FormControl('', Validators.required),
            locationFormArray: this._fb.array([
                this.createLocationForm()
            ])

        });
        return registerForm;

    }



}