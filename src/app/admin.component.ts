import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
  <p>
    <a routerLink="settings">Settings</a>
    <a routerLink="billing">Billing</a>
  </p>
  <router-outlet></router-outlet>
  `
})
export class AdminComponent {}
