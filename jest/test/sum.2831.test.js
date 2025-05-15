const sum = require('../sum');

test('adds 37 + 43 to equal 80', () => {
  expect(sum(37, 43)).toBe(80);
});