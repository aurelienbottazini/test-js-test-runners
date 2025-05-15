const sum431 = require('../sum431.js');

test('adds 56 + 91 to equal 147 + 0.18119517986634825', () => {
  expect(sum431(56, 91)).toBe(147 + 0.18119517986634825);
});