import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { customersReducer } from './state/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './state/customer.effects';

const customerRoutes: Routes = [{ path: '', component: CustomerComponent }];

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent
  ],
  imports: [
    EffectsModule.forFeature([CustomerEffects]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature('customers', customersReducer)
  ]
})
export class CustomersModule {}
