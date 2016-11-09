#array-unique

这是运用 es6+函数式编程书写的数组去重方法

##Install && Run

```sh
npm install
npm start
```

##Usage

```js
const utils = require('./src/index')

console.log(utils.unique([1, 2, 3], [3, 4, 5], [4, 5, 6]))

// [ 1, 2, 3, 4, 5, 6 ]

```