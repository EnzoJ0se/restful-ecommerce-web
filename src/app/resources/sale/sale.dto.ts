import { CustomerDTO } from '../customer/customer.dto';
import { ProductDTO } from '../product/product.dto';

export class SaleDTO {
    public id: number;
    public customer_id: number;
    public product_id: number;

    public code: string;
    public customer_cpf: string;
    public product_code: string;
    public quantity: number;
    public price: number;

    public customer: CustomerDTO;
    public product: ProductDTO;
}
