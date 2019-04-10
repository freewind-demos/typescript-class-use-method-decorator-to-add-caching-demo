function logging() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`enter: ${propertyKey}`)
    console.log(target);
    console.log(`exit: ${propertyKey}`)
  }
}

class User {
  constructor(public name: string) {
  }

  @logging()
  hello() {
    console.log(`Hello, ${this.name}!`);
  }
}


const user = new User('typescript')
user.hello()
