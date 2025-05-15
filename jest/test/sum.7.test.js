const sum = require('../sum');

test('adds 50 + 12 to equal 62', () => {
  expect(sum(50, 12)).toBe(62);
});