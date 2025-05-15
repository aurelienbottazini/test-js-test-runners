const sum = require('../sum');

test('adds 39 + 71 to equal 110', () => {
  expect(sum(39, 71)).toBe(110);
});