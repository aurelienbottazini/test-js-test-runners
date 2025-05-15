const sum = require('../sum');

test('adds 21 + 59 to equal 80', () => {
  expect(sum(21, 59)).toBe(80);
});