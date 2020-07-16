import { Action, props, createAction } from '@ngrx/store';
import { Customer } from '../customer.model';
import { Update } from '@ngrx/entity';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = '[Customer] Load Customers',
  LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
  LOAD_CUSTOMERS_FAIL = '[Customer] Load Customers Fail',

  LOAD_CUSTOMER = '[Customer] Load Customer',
  LOAD_CUSTOMER_SUCCESS = '[Customer] Load Customer Success',
  LOAD_CUSTOMER_FAIL = '[Customer] Load Customer Fail',

  CREATE_CUSTOMER = '[Customer] Create Customer',
  CREATE_CUSTOMER_SUCCESS = '[Customer] Create Customer Success',
  CREATE_CUSTOMER_FAIL = '[Customer] Create Customer Fail',

  UPDATE_CUSTOMER = '[Customer] Update Customer',
  UPDATE_CUSTOMER_SUCCESS = '[Customer] Update Customer Success',
  UPDATE_CUSTOMER_FAIL = '[Customer] Update Customer Fail',

  DELETE_CUSTOMER = '[Customer] Delete Customer',
  DELETE_CUSTOMER_SUCCESS = '[Customer] Delete Customer Success',
  DELETE_CUSTOMER_FAIL = '[Customer] Delete Customer Fail',
}

export const loadCustomers = createAction(
  CustomerActionTypes.LOAD_CUSTOMERS);

export const loadCustomersSuccess = createAction(
  CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS,
  props<{ payload: Customer[] }>()
);
export const loadCustomersFail = createAction(
  CustomerActionTypes.LOAD_CUSTOMERS_FAIL,
  props<{ payload: string }>()
);

export const loadCustomer = createAction(
  CustomerActionTypes.LOAD_CUSTOMER,
  props<{ payload: number }>()
);

export const loadCustomerSuccess = createAction(
  CustomerActionTypes.LOAD_CUSTOMER_SUCCESS,
  props<{ payload: Customer }>()
);
export const loadCustomerFail = createAction(
  CustomerActionTypes.LOAD_CUSTOMER_FAIL,
  props<{ payload: string }>()
);

export const createCustomer = createAction(
  CustomerActionTypes.CREATE_CUSTOMER,
  props<{ payload: Customer }>()
);

export const createCustomerSuccess = createAction(
  CustomerActionTypes.CREATE_CUSTOMER_SUCCESS,
  props<{ payload: Customer }>()
);
export const createCustomerFail = createAction(
  CustomerActionTypes.CREATE_CUSTOMER_FAIL,
  props<{ payload: string }>()
);

export const updateCustomer = createAction(
  CustomerActionTypes.UPDATE_CUSTOMER,
  props<{ payload: Customer }>()
);

export const updateCustomerSuccess = createAction(
  CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS,
  props<{ payload: Update<Customer> }>()
);
export const updateCustomerFail = createAction(
  CustomerActionTypes.UPDATE_CUSTOMER_FAIL,
  props<{ payload: string }>()
);

export const deleteCustomer = createAction(
  CustomerActionTypes.DELETE_CUSTOMER,
  props<{ payload: number }>()
);

export const deleteCustomerSuccess = createAction(
  CustomerActionTypes.DELETE_CUSTOMER_SUCCESS,
  props<{ payload: number }>()
);
export const deleteCustomerFail = createAction(
  CustomerActionTypes.DELETE_CUSTOMER_FAIL,
  props<{ payload: string }>()
);
