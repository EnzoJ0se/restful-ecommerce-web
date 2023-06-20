import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerHttpService } from 'src/app/resources/customer/customer-http-service';
import { CustomerDTO } from 'src/app/resources/customer/customer.dto';

@Component({
    selector: 'customer-form',
    templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent implements OnInit {
    @ViewChild(NgForm) public ngForm: NgForm;

    public customerDTO: CustomerDTO = new CustomerDTO();

    public constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        private customerHttpService: CustomerHttpService
    ) {}

    public ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id'];

        if (!id) {
            return;
        }

        this.customerHttpService.find(id).then((response) => this.customerDTO = response.data);
    }

    public save(): void {
        if (!this.ngForm.valid) {
            alert('preencha todos os campos.');

            return;
        }

        const request = this.customerDTO.id
            ? this.customerHttpService.put(this.customerDTO, this.customerDTO.id)
            : this.customerHttpService.post(this.customerDTO);

        request.then(() => this.router.navigate(['/customer']))
            .catch(() => alert('ocorreu um erro ao salvar'));
    }
}
