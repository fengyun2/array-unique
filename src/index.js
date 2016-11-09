/**
 * 函数式编程下的数组去重
 *
 */
function reduce(fn) {
  return function(...args) {
    return args.reduce(fn.bind(this))
  }
}

function add(x, y) {
  return x + y
}

function mul(x, y) {
  return x * y
}

function concat(arr1, arr2) {
  return arr1.concat(arr2)
}

function unique (arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2)))
}

add = reduce(add)
mul = reduce(mul)
concat = reduce(concat)
unique = reduce(unique)

// console.log(add(1, 2, 3), mul(1, 2, 3, 4), concat([1, 2, 3], [3, 4, 5], [4, 5, 6]))
// console.log(unique([1, 2, 3], [3, 4, 5], [4, 5, 6]))

module.exports = {
  add,
  mul,
  concat,
  unique
}