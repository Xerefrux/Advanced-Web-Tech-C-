import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getName(): string {
        return 'Raiyan Sayeed';
      }
}
