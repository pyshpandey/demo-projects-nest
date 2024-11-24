import { Injectable } from '@nestjs/common';
import { accounts } from './mock/accounts.mock';

@Injectable()
export class AccountService {
    private readonly accountList = accounts;

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
}
