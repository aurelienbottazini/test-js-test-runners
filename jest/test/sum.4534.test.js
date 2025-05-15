const sum = require('../sum');

test('adds 75 + 65 to equal 140', () => {
  expect(sum(75, 65)).toBe(140);
});