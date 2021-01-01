import { Component, NgModule, Compiler } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router';
import { AdminModule } from './admin.module'


@Component({
  selector: 'app-root',
  template: `
<div><a routerLink="">Home</a></div>
<div><a routerLink="settings">Settigns</a></div>
<a *ngIf="isAdminShown" routerLink="admin">Admin</a>
<router-outlet></router-outlet>
<button (click)="loadMore()">Load more states</button>
  `
})
export class AppComponent {
  isAdminShown = false;

  constructor(private router: Router, private compiler: Compiler) {}

  loadMore() {
    this.isAdminShown = true;

    this.compiler.compileModuleAsync(AdminModule).then(ngModuleFactory => {
      const route: Route = {
        path: 'admin',
        loadChildren: () => {
          return ngModuleFactory;
        }
      };
      this.router.resetConfig([route, ...this.router.config]);
    });
  }
}
