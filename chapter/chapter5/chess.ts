// チェスのゲームを表します
class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      new King('White', 'E', 1),
    ]
  }
}

class Zebra {
  trot() {
  }
}

class Poodle {
  trot() {
  }
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle)

type ClassConstructor<T> = new(...args: any[]) => T

function withEZDebug<C extends ClassConstructor<{
  getDebugValue(): object
}>>(Class: C) {
  return class extends Class {
    debug() {
      let Name = this.constructor.name
      let value = this.getDebugValue()
      return Name + '(' + JSON.stringify(value) + ')'
    }
  }
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string,
  ) {
  }

  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName,
    }
  }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
user.debug()

type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

type ShoeCreator = {
  create(type: 'balletFlat'): BalletFlat
  create(type: 'boot'): Boot
  create(type: 'sneaker'): Sneaker
}

let Shoe: ShoeCreator = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat()
      case "boot":
        return new Boot()
      case "sneaker":
        return new Sneaker()
    }
  }
}

let myBoot = Shoe.create('boot')
let myBalletFlat = Shoe.create('balletFlat')
let mySneaker = Shoe.create('sneaker')

class RequestBuilder {
  protected data: object | null = null
  protected method: 'get' | 'post' | null = null
  protected url: string | null = null

  setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
    return new RequestBuilderWithMethod().setMethod(method).setData(this.data)
  }

  setData(data: object | null): this {
    this.data = data
    return this
  }
}

class RequestBuilderWithMethod extends RequestBuilder {
  setMethod(method: 'get' | 'post' | null): this {
    this.method = method
    return this
  }

  setURL(url: string): RequestBuilderWithMethodAndURL {
    return new RequestBuilderWithMethodAndURL()
      .setMethod(this.method)
      .setURL(url)
      .setData(this.data)
  }
}

class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod {
  setURL(url: string): this {
    this.url = url
    return this
  }

  send() {
  }
}

new RequestBuilder()
  .setMethod('get')
  .setURL('https://amazon.com')
  .send()