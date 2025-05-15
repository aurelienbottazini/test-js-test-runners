const sum = require('../sum');

test('adds 59 + 82 to equal 141', () => {
  expect(sum(59, 82)).toBe(141);
});