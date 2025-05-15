const sum2089 = require('../sum2089.js');

test('adds 70 + 61 to equal 131 + 0.4416184842499712', () => {
  expect(sum2089(70, 61)).toBe(131 + 0.4416184842499712);
});