export function logHello() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function () {
            console.log('hello');
            originalMethod();
        }

        return descriptor;
    }
}

function classy<T extends { new (...args: any[]): { test: boolean } }>(constructor: T) {
    return class extends constructor {
        constructor() {
            super();
            this.test = true;
        }
    };
}

function defaultValue(value: any) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalGet = descriptor.get!;
        descriptor.get = () => {
            const originalValue = originalGet();
            console.log('org' + originalValue)
            if (originalGet == null) {
                return value;
            }
            return originalValue;
        }

        console.log();
        // descriptor.value = value;
    };
}

@classy
export class DecoratorTest {
    test: boolean = false;
    private _nullable = null;

    @defaultValue(1)
    get nullable()  {
        return this._nullable;
    }

    @logHello()
    log() {
        console.log('log');
    }
}