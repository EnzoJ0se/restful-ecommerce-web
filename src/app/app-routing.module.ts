import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindDefaultPageComponent } from 'src/pages/template/tailwind-default-page/tailwind-default-page.component';

const routes: Routes = [
    {
        path: '',
        component: TailwindDefaultPageComponent,
        children: [
            {
                path: 'customer',
                loadChildren: () => import('../pages/customer/customer.module').then((m) => m.CustomerListModule)
            },
            {
                path: 'product',
                loadChildren: () => import('../pages/product/product.module').then((m) => m.ProductModule)
            }
            ,
            {
                path: 'sale',
                loadChildren: () => import('../pages/sale/sale.module').then((m) => m.SaleModule)
            }
        ],
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
