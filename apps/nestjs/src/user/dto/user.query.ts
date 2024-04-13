import { IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class UserQuery {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  limit = 10;
}
