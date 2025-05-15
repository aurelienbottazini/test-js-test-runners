const sum = require('../sum');

test('adds 6 + 62 to equal 68', () => {
  expect(sum(6, 62)).toBe(68);
});