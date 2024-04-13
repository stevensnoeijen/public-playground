export function logHello() {
  return (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = () => {
      console.log('hello');
      originalMethod();
    };

    return descriptor;
  };
}

// biome-ignore lint/suspicious/noExplicitAny: Required any for using Mixin pattern in ts https://stackoverflow.com/a/64493510
type ConstructorWithTest = new (...args: any[]) => { test: true };
function classy<T extends ConstructorWithTest>(target: T) {
  return class extends target {
    declare test: true;
  };
}

function defaultValue(value: unknown) {
  return (
    _target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    if (descriptor.get == null) throw new Error('Getter should be set');

    const originalGet = descriptor.get;
    descriptor.get = () => {
      const originalValue = originalGet();
      console.log(`org${originalValue}`);
      if (originalGet == null) {
        return value;
      }
      return originalValue;
    };

    console.log();
    // descriptor.value = value;
  };
}

@classy
export class DecoratorTest {
  test = false;
  private _nullable = null;

  @defaultValue(1)
  get nullable() {
    return this._nullable;
  }

  @logHello()
  log() {
    console.log('log');
  }
}
