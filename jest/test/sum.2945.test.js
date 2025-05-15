const sum = require('../sum');

test('adds 58 + 33 to equal 91', () => {
  expect(sum(58, 33)).toBe(91);
});