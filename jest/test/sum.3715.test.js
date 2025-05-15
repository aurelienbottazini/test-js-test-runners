const sum = require('../sum');

test('adds 13 + 67 to equal 80', () => {
  expect(sum(13, 67)).toBe(80);
});