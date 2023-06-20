import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CustomerHttpService } from 'src/app/resources/customer/customer-http-service';
import { CustomerDTO } from 'src/app/resources/customer/customer.dto';
import { SaleHttpService } from 'src/app/resources/sale/sale-http-service';
import { SaleDTO } from 'src/app/resources/sale/sale.dto';

@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
    public customers: CustomerDTO[] = [];
    public sales: SaleDTO[] = [];

    public penIcon = faPen;
    public trashIcon = faTrash;

    public filters: any = {
        sale_id: null,
        name: null,
        cpf: null,
        address: null,
    };

    public constructor(
        private customerHttpService: CustomerHttpService,
        private saleHttpService: SaleHttpService
    ) { }

    public ngOnInit(): void {
        this.refreshTable();
        this.getSales();
    }

    public delete(customer: CustomerDTO): void {
        this.customerHttpService.delete(customer.id)
            .then(() => this.refreshTable())
            .catch(() => alert('ocorreu um erro'));
    }

    public refreshTable(): void {
        this.customerHttpService.get(this.filters).then((response) => {
            this.customers = response?.data;
        });
    }

    public clearFilters(): void {
        this.filters = {
            sale_id: null,
            name: null,
            cpf: null,
            address: null,
        };

        this.refreshTable();
    }

    private getSales(): void {
        this.saleHttpService.get().then((response) => {
            this.sales = response?.data;
        });
    }
}
