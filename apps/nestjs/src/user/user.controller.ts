import { Controller, Get } from '@nestjs/common';
import { DrizzleService } from '../drizzle/drizzle.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly drizzleService: DrizzleService,
  ) {}

  @Get()
  async getAll() {
    const users = await this.drizzleService.db.query.UserTable.findMany();
    return users;
  }
}
