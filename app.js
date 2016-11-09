const utils = require('./src/index')

console.log(utils.unique([1, 2, 3], [3, 4, 5], [4, 5, 6]))
// [ 1, 2, 3, 4, 5, 6 ]
