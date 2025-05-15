const sum = require('../sum');

test('adds 65 + 86 to equal 151', () => {
  expect(sum(65, 86)).toBe(151);
});