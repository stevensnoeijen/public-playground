import { Body, Controller, Get, Post } from '@nestjs/common';
import { DrizzleService } from '../drizzle/drizzle.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserTable } from 'src/drizzle/schema';

@Controller('users')
export class UserController {
  constructor(private readonly drizzleService: DrizzleService) {}

  @Get()
  async getAll() {
    const users = await this.drizzleService.db.query.UserTable.findMany();
    return users;
  }

  @Post()
  async createOne(@Body() body: CreateUserDto) {
    const user = await this.drizzleService.db
      .insert(UserTable)
      .values({
        email: body.email,
      })
      .returning();
    return user;
  }
}
