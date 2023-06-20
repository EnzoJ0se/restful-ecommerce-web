import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductHttpService } from 'src/app/resources/product/product-http-service';
import { ProductDTO } from 'src/app/resources/product/product.dto';

@Component({
    selector: 'product-form',
    templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public productDTO: ProductDTO = new ProductDTO();

    public constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        private productHttpService: ProductHttpService
    ) {}

    public ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id'];

        if (!id) {
            return;
        }

        this.productHttpService.find(id).then((response) => this.productDTO = response.data);
    }

    public save(): void {
        if (!this.ngForm.valid) {
            alert('preencha todos os campos.');

            return;
        }

        const request = this.productDTO.id
            ? this.productHttpService.put(this.productDTO, this.productDTO.id)
            : this.productHttpService.post(this.productDTO);

        request.then(() => this.router.navigate(['/product']))
            .catch(() => alert('ocorreu um erro ao salvar'));
    }
}

