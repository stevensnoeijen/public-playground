import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DrizzleService } from '../drizzle/drizzle.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserQuery } from './dto/user.query';
import { UserTable } from '../drizzle/schema';
import { eq } from 'drizzle-orm';
import { ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly drizzleService: DrizzleService) { }

  @Get()
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getAll(@Query() { limit }: UserQuery) {
    const users = await this.drizzleService.db.query.UserTable.findMany({
      limit,
    });
    return users;
  }

  @Post()
  async createOne(@Body() body: CreateUserDto) {
    const user = await this.drizzleService.db
      .insert(UserTable)
      .values(body)
      .onConflictDoUpdate({
        target: UserTable.email,
        set: body,
      })
      .returning();
    return user;
  }

  @Put('/:id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    const user = await this.drizzleService.db
      .update(UserTable)
      .set(body)
      .where(eq(UserTable.id, id))
      .returning();
    return user;
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    await this.drizzleService.db
      .delete(UserTable)
      .where(eq(UserTable.id, id))
      .returning();
  }
}
