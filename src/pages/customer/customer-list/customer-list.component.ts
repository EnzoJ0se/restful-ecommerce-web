import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CustomerHttpService } from 'src/app/resources/customer/customer-http-service';
import { CustomerDTO } from 'src/app/resources/customer/customer.dto';

@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
    public customers: CustomerDTO[] = [];

    public penIcon = faPen;
    public trashIcon = faTrash;

    public constructor(
        private customerHttpService: CustomerHttpService
    ) { }

    public ngOnInit(): void {
        this.refreshTable();
    }

    public delete(customer: CustomerDTO): void {
        this.customerHttpService.delete(customer.id)
            .then(() => this.refreshTable())
            .catch(() => alert('ocorreu um erro'));
    }

    private refreshTable(): void {
        this.customerHttpService.get().then((response) => {
            this.customers = response?.data;
        });
    }
}
