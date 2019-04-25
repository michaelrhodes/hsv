module.exports = hsv

function hsv (rgb) {
  var r = rgb[0] / 255
  var g = rgb[1] / 255
  var b = rgb[2] / 255
  var max = Math.max(r, g, b)
  var min = Math.min(r, g, b)
  var d = max - min
  var h = 0
  var s = max ? d / max : 0
  var v = max

  if (min !== max) {
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
    if (max === g) h = (b - r) / d + 2
    if (max === b) h = (r - g) / d + 4
    h /= 6
  }

  return [h, s, v]
}
