import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('account')
export class AccountController {

    constructor(
        private readonly accountService: AccountService
    ) {}

    @Post('create')
    create(@Body() createAccountDto: CreateAccountDto) {
        return this.accountService.create(createAccountDto);
    }

    @Get()
    getAllAccounts() {
        return this.accountService.findAll();
    }

    @Get('getAccount/:id')
    // getAccountById(@Param('id', ParseIntPipe) accountId: number) {
    getAccountById(@Param('id') id: string) {
        return this.accountService.findOne(id);
    }

    @Post('deposit')
    deposit(@Body() depositData: any) {

    }
}
