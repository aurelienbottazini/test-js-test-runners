const sum = require('../sum');

test('adds 72 + 79 to equal 151', () => {
  expect(sum(72, 79)).toBe(151);
});