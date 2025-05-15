const sum = require('../sum');

test('adds 49 + 13 to equal 62', () => {
  expect(sum(49, 13)).toBe(62);
});