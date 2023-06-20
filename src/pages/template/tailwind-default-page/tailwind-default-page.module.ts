import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TailwindDefaultPageComponent } from './tailwind-default-page.component';

const routes: Routes = [
    {
        "path": "",
        "component": TailwindDefaultPageComponent
    }
];


@NgModule({
    exports: [ RouterModule ],
    declarations: [TailwindDefaultPageComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
})
export class TailwindDefaultPageModule { }
