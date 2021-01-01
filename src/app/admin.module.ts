import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

@Component({ selector: 'app-admin-settings', template: '<h1>AdminSettingsComponent</h1>'})
export class AdminSettingsComponent {}

@Component({ selector: 'app-billing', template: '<h1>BillingComponent</h1>'})
export class BillingComponent {}


const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'settings', component: AdminSettingsComponent },
    { path: 'billing', component: BillingComponent }
  ] },
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminSettingsComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
