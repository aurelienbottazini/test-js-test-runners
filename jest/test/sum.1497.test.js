const sum = require('../sum');

test('adds 58 + 83 to equal 141', () => {
  expect(sum(58, 83)).toBe(141);
});