const sum = require('../sum');

test('adds 57 + 43 to equal 100', () => {
  expect(sum(57, 43)).toBe(100);
});