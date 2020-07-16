import * as fromRoot from '../../state/app-state';
import { Customer } from '../customer.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import {
  loadCustomers,
  loadCustomersSuccess,
  loadCustomersFail,
  loadCustomerSuccess,
  loadCustomerFail,
  createCustomerSuccess,
  createCustomerFail,
  updateCustomerSuccess,
  updateCustomerFail,
  deleteCustomerSuccess,
  deleteCustomerFail
} from './customer.actions';

export interface CustomerState extends EntityState<Customer> {
  selectedCustomerId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  customers: CustomerState;
}
export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<
  Customer
>();
export const defaultCustomer: CustomerState = {
  ids: [],
  entities: {},
  selectedCustomerId: null,
  loading: false,
  loaded: false,
  error: ''
};
export const initialState = customerAdapter.getInitialState(defaultCustomer);

export const customersReducer = createReducer(
  initialState,
  on(loadCustomers, (state) => ({
    ...state,
    loading: true
  })),
  on(loadCustomersSuccess, (state, { payload }) =>
    customerAdapter.setAll(payload, {
      ...state,
      loading: false,
      loaded: true
    })
  ),
  on(loadCustomersFail, (state, { payload }) => ({
    ...state,
    entities: {},
    loading: false,
    loaded: false,
    error: payload
  })),
  on(loadCustomerSuccess, (state, { payload }) =>
    customerAdapter.setOne(payload, {
      ...state,
      selectedCustomerId: payload.id,
      loading: false,
      loaded: true
    })
  ),
  on(loadCustomerFail, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
  on(createCustomerSuccess, (state, { payload }) =>
    customerAdapter.setOne(payload, {
      ...state,
      loading: false,
      loaded: true
    })
  ),
  on(createCustomerFail, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
  on(updateCustomerSuccess, (state, { payload }) =>
    customerAdapter.updateOne(payload, {
      ...state,
      loading: false,
      loaded: true
    })
  ),
  on(updateCustomerFail, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
  on(deleteCustomerSuccess, (state, { payload }) =>
    customerAdapter.removeOne(payload, {
      ...state,
      loading: false,
      loaded: true
    })
  ),
  on(deleteCustomerFail, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  }))
);
