import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { accounts } from './mock/accounts.mock';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
    private readonly accountList = accounts;

    constructor(@InjectRepository(Account) private accountRepository: Repository<Account>) {

    }

    getAllAccounts(): Promise<any> {
        return new Promise((resolve) => {
            resolve(this.accountList);
        });
    }

    getAccountById(accountId: number): Promise<any> {
        return new Promise((resolve) => {
            const account = this.accountList.find((account) => {
                return account.accountId === accountId
            });
            resolve(account);
        });
    }

    createAccount(accountData): Promise<any> {
        return new Promise((resolve) => {
            this.accountList.push(accountData)
            resolve(this.accountList);
        });
    }

    async create(createAccountDto: CreateAccountDto): Promise<Account> {
        return await this.accountRepository.create(createAccountDto);
    }

    async findAll(): Promise<Account[]> {
        return await this.accountRepository.find();
    }

    async findOne(id: string): Promise<Account> {
        return await this.accountRepository.findOneById(id);
    }
}
