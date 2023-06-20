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
            }
        ],
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
