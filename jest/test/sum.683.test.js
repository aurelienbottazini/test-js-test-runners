const sum = require('../sum');

test('adds 0 + 62 to equal 62', () => {
  expect(sum(0, 62)).toBe(62);
});