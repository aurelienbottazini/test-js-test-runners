const sum = require('../sum');

test('adds 30 + 38 to equal 68', () => {
  expect(sum(30, 38)).toBe(68);
});