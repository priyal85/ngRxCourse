import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customerActions from '../state/customer.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/customer.reducer';
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';
import { getCurrentCustomer } from '../state/customer.selectors';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
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
      membership: ['', Validators.required],
      id: null
    });
    const customer$: Observable<Customer> = this.store.select(
      getCurrentCustomer
    );
    customer$.subscribe((currentCustomer) => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          name: currentCustomer.name,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          membership: currentCustomer.membership,
          id: currentCustomer.id
        });
      }
    });
  }
  updateCustomer() {
    const updatedCustomer = this.customerForm.getRawValue();
    this.store.dispatch(customerActions.updateCustomer({payload : updatedCustomer}));
    this.customerForm.reset();
  }
}
