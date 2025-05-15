const sum = require('../sum');

test('adds 85 + 6 to equal 91', () => {
  expect(sum(85, 6)).toBe(91);
});