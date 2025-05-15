const sum = require('../sum');

test('adds 52 + 88 to equal 140', () => {
  expect(sum(52, 88)).toBe(140);
});