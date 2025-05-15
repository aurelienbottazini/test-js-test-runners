const sum = require('../sum');

test('adds 68 + 0 to equal 68', () => {
  expect(sum(68, 0)).toBe(68);
});