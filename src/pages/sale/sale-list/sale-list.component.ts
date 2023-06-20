import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CustomerHttpService } from 'src/app/resources/customer/customer-http-service';
import { CustomerDTO } from 'src/app/resources/customer/customer.dto';
import { ProductHttpService } from 'src/app/resources/product/product-http-service';
import { ProductDTO } from 'src/app/resources/product/product.dto';
import { SaleHttpService } from 'src/app/resources/sale/sale-http-service';
import { SaleDTO } from 'src/app/resources/sale/sale.dto';

@Component({
    selector: 'sale-list',
    templateUrl: './sale-list.component.html'
})
export class SaleListComponent  implements OnInit {
    public sales: SaleDTO[] = [];

    public products: ProductDTO[] = [];
    public customers: CustomerDTO[] = [];

    public penIcon = faPen;
    public trashIcon = faTrash;

    public filters: any = {
        customer_id: null,
        product_id: null,
        code: null,
        quantity: null,
        price: null
    };

    public constructor(
        private saleHttpService: SaleHttpService,
        private productHttpService: ProductHttpService,
        private customerHttpService: CustomerHttpService
    ) { }

    public ngOnInit(): void {
        this.refreshTable();
        this.loadSelectData();
    }

    public delete(sale: SaleDTO): void {
        this.saleHttpService.delete(sale.id)
            .then(() => this.refreshTable())
            .catch(() => alert('ocorreu um erro'));
    }

    public refreshTable(): void {
        this.saleHttpService.get(this.filters).then((response) => {
            this.sales = response?.data;
        });
    }

    public clearFilters(): void {
        this.filters = {
            customer_id: null,
            product_id: null,
            code: null,
            quantity: null,
            price: null
        };

        this.refreshTable();
    }

    private loadSelectData(): void {
        this.productHttpService.get().then((response) => {
            this.products = response?.data;
        });

        this.customerHttpService.get().then((response) => {
            this.customers = response?.data;
        });
    }
}
