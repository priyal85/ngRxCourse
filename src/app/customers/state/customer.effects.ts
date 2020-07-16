import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CustomerService } from '../customer.service';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Customer } from '../customer.model';
import {
  loadCustomer,
  loadCustomerSuccess,
  loadCustomerFail,
  createCustomer,
  createCustomerSuccess,
  createCustomerFail,
  deleteCustomer,
  updateCustomer,
  deleteCustomerSuccess,
  deleteCustomerFail,
  updateCustomerFail,
  updateCustomerSuccess,
  loadCustomers,
  loadCustomersFail,
  loadCustomersSuccess
} from './customer.actions';

@Injectable({ providedIn: 'root' })
export class CustomerEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly customerService: CustomerService
  ) {}

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType(loadCustomers),
    mergeMap((action) =>
      this.customerService.getCustomers().pipe(
        map((customers: Customer[]) =>
          loadCustomersSuccess({ payload: customers })
        ),
        catchError((e) => of(loadCustomersFail(e)))
      )
    )
  );

  @Effect()
  loadCustomer$: Observable<Action> = this.actions$.pipe(
    ofType(loadCustomer),
    mergeMap((action) =>
      this.customerService.getCustomerById(action.payload).pipe(
        map((customer: Customer) => loadCustomerSuccess({ payload: customer })),
        catchError((e) => of(loadCustomerFail(e)))
      )
    )
  );

  @Effect()
  createCustomer$: Observable<Action> = this.actions$.pipe(
    ofType(createCustomer),
    mergeMap((action) =>
      this.customerService.createCustomer(action.payload).pipe(
        map((customer: Customer) =>
          createCustomerSuccess({ payload: customer })
        ),
        catchError((e) => of(createCustomerFail(e)))
      )
    )
  );

  @Effect()
  updateCustomer$: Observable<Action> = this.actions$.pipe(
    ofType(updateCustomer),
    mergeMap((action) =>
      this.customerService.updateCustomer(action.payload).pipe(
        map((customer: Customer) =>
          updateCustomerSuccess({
            payload: { id: customer.id, changes: customer }
          })
        ),
        catchError((e) => of(updateCustomerFail(e)))
      )
    )
  );

  @Effect()
  deleteCustomer$: Observable<Action> = this.actions$.pipe(
    ofType(deleteCustomer),
    mergeMap((action) =>
      this.customerService.deleteCustomer(action.payload).pipe(
        map(() => deleteCustomerSuccess({ payload: action.payload })),
        catchError((e) => of(deleteCustomerFail(e)))
      )
    )
  );
}
