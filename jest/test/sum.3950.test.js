const sum = require('../sum');

test('adds 69 + 71 to equal 140', () => {
  expect(sum(69, 71)).toBe(140);
});