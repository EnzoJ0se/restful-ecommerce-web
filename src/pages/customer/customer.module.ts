import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
    { path: '', component: CustomerListComponent }
];

@NgModule({
    exports: [ RouterModule ],
    declarations: [CustomerListComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
})
export class CustomerListModule { }
