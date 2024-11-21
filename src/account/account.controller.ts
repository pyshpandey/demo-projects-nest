import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('account')
export class AccountController {

    @Post('create')
    create(@Body() accountData: any) {

    }

    @Post('deposit')
    deposit(@Body() depositData: any) {

    }
}
