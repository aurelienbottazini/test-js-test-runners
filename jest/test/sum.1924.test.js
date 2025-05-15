const sum = require('../sum');

test('adds 99 + 91 to equal 190', () => {
  expect(sum(99, 91)).toBe(190);
});