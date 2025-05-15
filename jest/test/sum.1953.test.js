const sum = require('../sum');

test('adds 91 + 50 to equal 141', () => {
  expect(sum(91, 50)).toBe(141);
});