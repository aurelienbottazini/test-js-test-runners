const sum = require('../sum');

test('adds 69 + 82 to equal 151', () => {
  expect(sum(69, 82)).toBe(151);
});