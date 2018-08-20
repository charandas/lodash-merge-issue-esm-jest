import libFn from '../packages/some-esm-package'

describe('test lib', () => {
  test('call fn', () => {
    expect(libFn()).toEqual({
      "test": {
        "prop1": "property first",
        "prop2": {
          "prop3": "property second.third.override"
        }
      }
    })
  })
})