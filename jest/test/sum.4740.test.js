const sum = require('../sum');

test('adds 53 + 9 to equal 62', () => {
  expect(sum(53, 9)).toBe(62);
});