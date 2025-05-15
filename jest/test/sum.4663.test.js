const sum = require('../sum');

test('adds 21 + 70 to equal 91', () => {
  expect(sum(21, 70)).toBe(91);
});