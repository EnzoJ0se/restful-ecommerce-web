import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseHttpClient {
    protected jsonApi: string = '';
    protected filters: any;

    protected requestConfig = {
        headers: {
            accept: 'application/json, text/plain, */*',
        },
    };

    public constructor(
        private httpClient: HttpClient
    ) {
    }

    public bindJsonApi(): string {
        return `${environment.api}/${this.jsonApi}`;
    }

    public get(filters?: any): Promise<any> {
        const url = this.bindJsonApi();
        const options = {
            params: this.buildQueryParams(filters || filters),
            headers: this.requestConfig.headers
        };

        return firstValueFrom(
            this.httpClient.get(url, options)
        );
    }

    public find(id: number): Promise<any> {
        const url = this.bindJsonApi();

        return firstValueFrom(
            this.httpClient.get(`${url}/${id}`, this.requestConfig)
        );
    }

    public post(data: any): Promise<any> {
        const url = this.bindJsonApi();

        return firstValueFrom(
            this.httpClient.post(url, data, this.requestConfig)
        );
    }

    public put(data: any, id?: number, endpoint?: string): Promise<any> {
        let url = this.bindJsonApi();

        url = endpoint ? `${url}/${endpoint}` : url;

        if (id) {
            url = `${url}/${id}`;
        }

        if (endpoint) {
            url = `${url}/${endpoint}`;
        }

        return firstValueFrom(
            this.httpClient.put(url, data, this.requestConfig)
        );
    }

    public delete(id: number): Promise<any> {
        const url = this.bindJsonApi();

        return firstValueFrom(
            this.httpClient.delete(`${url}/${id}`, this.requestConfig)
        );
    }

    private buildQueryParams(filters: any): HttpParams {
        const params = new HttpParams();

        if (!filters) {
            return params;
        }

        Object.keys(filters)?.forEach(
            (key) => params.set('key', filters[key])
        );

        return params;
    }
}
