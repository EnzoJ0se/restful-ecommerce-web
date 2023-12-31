import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
    { path: '', component: CustomerListComponent },
    { path: 'incluir', component: CustomerFormComponent },
    { path: ':id/editar', component: CustomerFormComponent },
];

@NgModule({
    exports: [
        RouterModule
    ],
    declarations: [
        CustomerListComponent,
        CustomerFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
    ],
})
export class CustomerListModule { }
