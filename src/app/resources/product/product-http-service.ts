import { Injectable } from '@angular/core';
import { BaseHttpClient } from 'src/app/base/BaseHttpClient';

@Injectable({
    providedIn: 'root'
})
export class ProductHttpService extends BaseHttpClient {
    protected override jsonApi: string = 'products';
}
