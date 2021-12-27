function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

let fibonacciGenerator = createFibonacciGenerator()
fibonacciGenerator.next()

let numbers = {
  * [Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  }
}

function add(a: number, b: number): number {
  return a + b
}

const addd = (a: number, b: number): number => {
  return a + b
}

let hoge = addd(1, 2)

type Greet = (name: string) => string
type Log = (message: string, userId?: string) => void
type SumVariadicSafe = (...numbers: number[]) => number

let log: Log = (
  message,
  userId = 'Not signed in'
) => {
  const time = new Date().toISOString()
  console.log(time, message, userId)
}

type MyEvent<T> = {
  target: T
  type: string
}

let myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector('#myButton'),
  type: 'click'
}

type TimedEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
}

type TreeNode = {
  value: string
}

type LeafNode = TreeNode & {
  isLeaf: true
}

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

let an: TreeNode = {value: 'a'}
let bn: LeafNode = {value: 'b', isLeaf: true}
let cn: InnerNode = {value: 'c', children: [bn]}

function mapNode<T extends TreeNode>(
  node: T,
  f: (value: string) => string
): T {
  return {
    ...node,
    value: f(node.value)
  }
}

let a1 = mapNode(an, _ => _.toUpperCase())
let b1 = mapNode(bn, _ => _.toUpperCase())
let c1 = mapNode(cn, _ => _.toUpperCase())
