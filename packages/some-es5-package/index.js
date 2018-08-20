const { merge } = require('lodash')

const a = {
  "test": {
    "prop1": "property first",
    "prop2": {
      "prop3": "property second.third"
    }
  }
}

const b = {
  "test": {
    "prop2": {
      "prop3": "property second.third.override"
    }
  }
}

module.exports = function libFn () {
  return merge(a, b)
}
