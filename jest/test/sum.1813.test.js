const sum = require('../sum');

test('adds 30 + 59 to equal 89', () => {
  expect(sum(30, 59)).toBe(89);
});