import { Injectable } from '@nestjs/common';
import { customers } from 'src/account/mock/customers.mock';

@Injectable()
export class CustomerService {
    private readonly customerList = customers;

    getAllCustomers(): Promise<any> {
        return new Promise((resolve) => {
            resolve(this.customerList);
        });
    }

    getCustomerByEmail(email: string): Promise<any> {
        return new Promise((resolve) => {
            const email = this.customerList.find((customer) => {
                return customer.email === email
            });
            resolve(email);
        })
    }

    createCustomer(customerData): Promise<any> {
        return new Promise((resolve) => {
            this.customerList.push(customerData);
            resolve(this.customerList);
        }) 
    }
}
