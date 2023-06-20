import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from 'src/app/resources/customer/customer-http-service';
import { CustomerDTO } from 'src/app/resources/customer/customer.dto';

@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
    public customers: CustomerDTO[] = [];

    public constructor(
        private customerHttpService: CustomerHttpService
    ) {}

    public ngOnInit(): void {
        this.refreshTable();
    }

    private refreshTable(): void {
        this.customerHttpService.get().then((response) => {
            console.log(response);
        });
    }
}
