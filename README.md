TypeScript Jest Mock Module with Exported Default Function Demo
=========================================================

如果一个module定义类似于：

```
export default function foo() {}
```

在jest中怎么来mock这个函数？

经过测试，应该是:

```
jest.mock('./foo', () => jest.fn())
```

或者什么都不给，直接简单：

```
jest.mock('./foo');
```

而不是我本来以为的：

```
jest.mock('./foo', () => ({
  default: jest.fn()
}))
```

再结合一个自定义的强转函数`asMock`，可以让我们得到一个强类型的mock，方便后面操作。

```
npm install
npm test
```
