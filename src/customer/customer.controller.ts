import { Controller, Post, Get, Body, Param  } from '@nestjs/common';

@Controller('customer')
export class CustomerController {

    @Post('create')
    create(@Body() customerData: any) {

    }

    @Get(':email')
    getCustomer(@Param('email') email: string) {
        
    }
}
