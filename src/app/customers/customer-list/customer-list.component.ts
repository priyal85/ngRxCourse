import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Customer } from '../customer.model';
import {
  loadCustomers,
  deleteCustomer,
  loadCustomer,
} from '../state/customer.actions';
import { Observable } from 'rxjs';
import { getCustomers, getError } from '../state/customer.selectors';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  error$: Observable<string>;
  constructor(private readonly store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCustomers());
    this.customers$ = this.store.pipe(select(getCustomers));
    this.error$ = this.store.pipe(select(getError));
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure you want to delete the User?')) {
      this.store.dispatch(deleteCustomer({ payload: customer.id }));
    }
  }

  editCustomer(customer: Customer) {
    this.store.dispatch(loadCustomer({ payload: customer.id }));
  }
}
