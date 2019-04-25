# hsv
convert between hsv and rgb colour spaces

[![build status](https://travis-ci.org/michaelrhodes/hsv.svg?branch=master)](https://travis-ci.org/michaelrhodes/hsv)

## install
```sh
npm install michaelrhodes/hsv#1.0.0
```

## use
```js
var hsv = require('hsv/from-rgb')
var rgb = require('hsv/to-rgb')

rgb(hsv([124, 24, 241]))
> [124, 24, 241]
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
