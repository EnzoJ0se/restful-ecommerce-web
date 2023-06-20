import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SaleFormComponent } from './sale-form/sale-form.component';
import { SaleListComponent } from './sale-list/sale-list.component';

const routes: Routes = [
    { path: '', component: SaleListComponent },
    { path: 'incluir', component: SaleFormComponent },
    { path: ':id/editar', component: SaleFormComponent },
];

@NgModule({
    exports: [
        RouterModule
    ],
    declarations: [
        SaleListComponent,
        SaleFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
    ],
})
export class SaleModule { }
