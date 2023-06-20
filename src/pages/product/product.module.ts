import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'incluir', component: ProductFormComponent },
    { path: ':id/editar', component: ProductFormComponent },
];

@NgModule({
    exports: [
        RouterModule
    ],
    declarations: [
        ProductListComponent,
        ProductFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
    ],
})
export class ProductModule { }
