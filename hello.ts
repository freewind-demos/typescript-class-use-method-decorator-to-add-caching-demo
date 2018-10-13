function hello<T extends {new(...args: any[]): {}}>(constructor: T) {
  console.log(constructor);
  return class extends constructor {
    hello = () => {
      console.log(`Hello, ${(this as any).name}!`)
    }
  }
}

@hello
class User {
  name: string = 'Typescript'
}

const user = new User();
console.log((user as any).hello());
