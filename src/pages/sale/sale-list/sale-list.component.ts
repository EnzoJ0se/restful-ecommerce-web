import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SaleHttpService } from 'src/app/resources/sale/sale-http-service';
import { SaleDTO } from 'src/app/resources/sale/sale.dto';

@Component({
    selector: 'sale-list',
    templateUrl: './sale-list.component.html'
})
export class SaleListComponent  implements OnInit {
    public sales: SaleDTO[] = [];

    public penIcon = faPen;
    public trashIcon = faTrash;

    public constructor(
        private saleHttpService: SaleHttpService
    ) { }

    public ngOnInit(): void {
        this.refreshTable();
    }

    public delete(sale: SaleDTO): void {
        this.saleHttpService.delete(sale.id)
            .then(() => this.refreshTable())
            .catch(() => alert('ocorreu um erro'));
    }

    private refreshTable(): void {
        this.saleHttpService.get().then((response) => {
            this.sales = response?.data;
        });
    }
}
