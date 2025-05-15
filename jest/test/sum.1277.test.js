const sum = require('../sum');

test('adds 34 + 44 to equal 78', () => {
  expect(sum(34, 44)).toBe(78);
});