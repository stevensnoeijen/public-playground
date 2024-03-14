import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DumbGuard } from './nest-decorator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DumbGuard],
})
export class AppModule {}
