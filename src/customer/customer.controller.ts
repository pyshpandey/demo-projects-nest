import { Controller, Post, Get, Body, Param  } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {

    constructor(
        private readonly customerService: CustomerService
    ) {}

    @Get()
    async getAllCustomerList() {
        return await this.customerService.getAllCustomers();
    }

    @Get('getCustomer/:email')
    async getCustomerByEmail(@Param('email') email: string) {
        return await this.customerService.getCustomerByEmail(email);
    }

    @Post('create')
    async create(@Body() customerData: any) {
        return await this.customerService.createCustomer(customerData);
    }

}
