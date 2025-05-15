const sum = require('../sum');

test('adds 47 + 33 to equal 80', () => {
  expect(sum(47, 33)).toBe(80);
});