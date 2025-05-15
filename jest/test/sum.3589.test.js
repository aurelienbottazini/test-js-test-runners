const sum = require('../sum');

test('adds 39 + 52 to equal 91', () => {
  expect(sum(39, 52)).toBe(91);
});