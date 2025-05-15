const sum = require('../sum');

test('adds 84 + 83 to equal 167', () => {
  expect(sum(84, 83)).toBe(167);
});