const sum = require('../sum');

test('adds 8 + 83 to equal 91', () => {
  expect(sum(8, 83)).toBe(91);
});