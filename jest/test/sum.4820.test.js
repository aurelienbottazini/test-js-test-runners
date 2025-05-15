const sum = require('../sum');

test('adds 57 + 94 to equal 151', () => {
  expect(sum(57, 94)).toBe(151);
});