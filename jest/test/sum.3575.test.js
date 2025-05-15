const sum = require('../sum');

test('adds 4 + 87 to equal 91', () => {
  expect(sum(4, 87)).toBe(91);
});