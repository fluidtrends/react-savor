const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
global.localStorage = {
  setItem: (key, value, callback) => callback(),
  getItem: (key, callback) => callback(null, JSON.stringify({ test: 'test', username: 'test' })),
  removeItem: (key, callback) => callback()
}
global.storage = global.localStorage
copyProps(window, global);