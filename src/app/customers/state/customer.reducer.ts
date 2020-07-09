import { Action } from '@ngrx/store';

const initialState = {
  customers: [
    {
      name: 'John Doe',
      phone: '910928392098',
      address: '123 Sun Street',
      menbership: 'Platinum',
      id: 1
    }
  ],
  loading: false,
  loaded: true
};

export function customerReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'LOAD_CUSTOMERS':
      {
        return {
          ...state,
          loading: true,
          loaded: false
        };
      }


    default:
      return state;
  }
}
