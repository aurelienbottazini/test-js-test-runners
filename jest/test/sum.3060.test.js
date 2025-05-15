const sum = require('../sum');

test('adds 24 + 67 to equal 91', () => {
  expect(sum(24, 67)).toBe(91);
});