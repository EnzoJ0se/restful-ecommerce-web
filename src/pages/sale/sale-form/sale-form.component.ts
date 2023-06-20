import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleHttpService } from 'src/app/resources/sale/sale-http-service';
import { SaleDTO } from 'src/app/resources/sale/sale.dto';

@Component({
    selector: 'sale-form',
    templateUrl: './sale-form.component.html'
})
export class SaleFormComponent implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public saleDTO: SaleDTO = new SaleDTO();

    public constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        private saleHttpService: SaleHttpService
    ) {}

    public ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id'];

        if (!id) {
            return;
        }

        this.saleHttpService.find(id).then((response) => this.saleDTO = response.data);
    }

    public save(): void {
        if (!this.ngForm.valid) {
            alert('preencha todos os campos.');

            return;
        }

        const request = this.saleDTO.id
            ? this.saleHttpService.put(this.saleDTO, this.saleDTO.id)
            : this.saleHttpService.post(this.saleDTO);

        request.then(() => this.router.navigate(['/sale']))
            .catch(() => alert('ocorreu um erro ao salvar'));
    }
}

