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

    private refreshTable(): void {
        this.productHttpService.get().then((response) => {
            this.products = response?.data;
        });
    }
}
