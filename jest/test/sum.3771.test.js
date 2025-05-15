const sum = require('../sum');

test('adds 10 + 59 to equal 69', () => {
  expect(sum(10, 59)).toBe(69);
});