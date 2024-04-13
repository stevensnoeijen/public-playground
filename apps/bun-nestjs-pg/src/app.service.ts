import { Injectable } from '@nestjs/common';
import { DecoratorTest } from './decorators';

@Injectable()
export class AppService {
  getHello(): string {
    const decoratorTest = new DecoratorTest();
    decoratorTest.log();
    console.log(decoratorTest.test);
    // console.log(decoratorTest.nullable);

    return 'Hello World!';
  }
}
