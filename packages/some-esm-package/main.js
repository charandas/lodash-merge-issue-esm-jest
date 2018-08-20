import { merge } from 'lodash'

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

export default function libFn () {
  return merge(a, b)
}
