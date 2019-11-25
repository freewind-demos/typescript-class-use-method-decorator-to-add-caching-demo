import Cacher from './cache';

const cacher = new Cacher();

export default function cache() {
  return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const key = `${propertyKey.toString()}(${JSON.stringify(args)})`;
      return cacher.getOrFetch(key, () => originalMethod.apply(this, args));
    };
  }
}
