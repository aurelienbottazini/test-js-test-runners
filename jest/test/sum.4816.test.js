const sum = require('../sum');

test('adds 18 + 44 to equal 62', () => {
  expect(sum(18, 44)).toBe(62);
});