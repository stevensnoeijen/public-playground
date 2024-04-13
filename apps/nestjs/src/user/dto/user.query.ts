import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class UserQuery {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  limit = 10;
}
