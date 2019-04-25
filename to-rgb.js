module.exports = rgb

function rgb (hsv) {
  var h = hsv[0]
  var s = hsv[1]
  var v = hsv[2]
  var r, g, b

  var i = Math.floor(h * 6)
  var f = h * 6 - i
  var p = v * (1 - s)
  var q = v * (1 - f * s)
  var t = v * (1 - (1 - f) * s)
  var m = i % 6

  if (m === 0) r = v, g = t, b = p
  if (m === 1) r = q, g = v, b = p
  if (m === 2) r = p, g = v, b = t
  if (m === 3) r = p, g = q, b = v
  if (m === 4) r = t, g = p, b = v
  if (m === 5) r = v, g = p, b = q

  return [
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255)
  ]
}
