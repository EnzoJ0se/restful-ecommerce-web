import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TailwindDefaultPageModule } from 'src/pages/template/tailwind-default-page/tailwind-default-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TailwindDefaultPageModule,
        HttpClientModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
