const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.window = window
global.window.scrollTo = () => ({})
global.document = window.document

global.navigator = { userAgent: 'node.js' }

global.requestAnimationFrame = (callback) => setTimeout(callback, 0)
global.cancelAnimationFrame = (id) => clearTimeout(id)
global.fetch = () => Promise.resolve({ json: () => ({ data: "test" })})

global.localStorage = {
  setItem: (key, value, callback) => callback(),
  getItem: (key, callback) => callback(null, JSON.stringify({ test: 'test', username: 'test' })),
  removeItem: (key, callback) => callback()
}
global.storage = global.localStorage

copyProps(window, global)