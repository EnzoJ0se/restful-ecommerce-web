import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductHttpService } from 'src/app/resources/product/product-http-service';
import { ProductDTO } from 'src/app/resources/product/product.dto';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
    public products: ProductDTO[] = [];

    public penIcon = faPen;
    public trashIcon = faTrash;

    public filters: any = {
        code: null,
        description: null,
        price: null,
        stock_quantity: null,
    };

    public constructor(
        private productHttpService: ProductHttpService
    ) {}

    public ngOnInit(): void {
        this.refreshTable();
    }

    public delete(product: ProductDTO): void {
        this.productHttpService.delete(product.id)
            .then(() => this.refreshTable())
            .catch(() => alert('ocorreu um erro'));
    }

    public clearFilters(): void {
        this.filters = {
            code: null,
            description: null,
            price: null,
            stock_quantity: null,
        };

        this.refreshTable();
    }

    public refreshTable(): void {
        this.productHttpService.get(this.filters).then((response) => {
            this.products = response?.data;
        });
    }
}
