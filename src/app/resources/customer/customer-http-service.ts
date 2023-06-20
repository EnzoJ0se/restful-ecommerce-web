import { Injectable } from '@angular/core';
import { BaseHttpClient } from 'src/app/base/BaseHttpClient';

@Injectable({
    providedIn: 'root'
})
export class CustomerHttpService extends BaseHttpClient {
    protected override jsonApi: string = 'customers';
}
