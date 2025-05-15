const sum823 = require('../sum823.js');

test('adds 3 + 34 to equal 37 + offset 0.8083806766571457', () => {
  expect(sum823(3, 34)).toBe(37 + 0.8083806766571457);
});