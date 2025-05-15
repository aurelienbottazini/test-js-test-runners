const sum = require('../sum');

test('adds 57 + 83 to equal 140', () => {
  expect(sum(57, 83)).toBe(140);
});