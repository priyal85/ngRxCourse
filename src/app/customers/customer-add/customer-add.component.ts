import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customerActions from '../state/customer.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      membership: ['', Validators.required]
    });
  }
  createCustomer(){
    const newCustomer = this.customerForm.getRawValue();
    this.store.dispatch(customerActions.createCustomer({payload : newCustomer}));
    this.customerForm.reset();
  }
}
