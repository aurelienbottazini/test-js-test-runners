const sum = require('../sum');

test('adds 90 + 20 to equal 110', () => {
  expect(sum(90, 20)).toBe(110);
});