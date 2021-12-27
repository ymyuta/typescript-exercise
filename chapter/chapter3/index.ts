let aa: unknown = 30
let bb = aa === 123
if (typeof aa === 'number') {
  let dd = aa + 10
}

type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: boolean }
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

let catA: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true,
}

let dog