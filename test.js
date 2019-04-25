var hsv = require('./from-rgb')
var rgb = require('./to-rgb')

var c = [124, 24, 241]

c = rgb(hsv(c))
console.assert(c[0] === 124)
console.assert(c[1] === 24)
console.assert(c[2] === 241)

c = rgb(hsv(c))
console.assert(c[0] === 124)
console.assert(c[1] === 24)
console.assert(c[2] === 241)
