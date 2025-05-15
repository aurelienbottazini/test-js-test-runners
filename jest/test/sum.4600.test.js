const sum = require('../sum');

test('adds 44 + 25 to equal 69', () => {
  expect(sum(44, 25)).toBe(69);
});