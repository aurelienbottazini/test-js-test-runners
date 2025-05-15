const sum = require('../sum');

test('adds 15 + 54 to equal 69', () => {
  expect(sum(15, 54)).toBe(69);
});