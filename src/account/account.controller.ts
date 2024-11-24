import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AccountDto } from './dto/accountDto';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {

    constructor(
        private readonly accountService: AccountService
    ) {}

    @Get()
    async getAllAccounts() {
        return await this.accountService.getAllAccounts();
    }

    @Get('getAccount/:id')
    async getAccountById(@Param('id', ParseIntPipe) accountId: number) {
        return await this.accountService.getAccountById(accountId);
    }


    @Post('create')
    async create(@Body() accountData: AccountDto) {
        return await this.accountService.createAccount(accountData);
    }

    @Post('deposit')
    deposit(@Body() depositData: any) {

    }
}
