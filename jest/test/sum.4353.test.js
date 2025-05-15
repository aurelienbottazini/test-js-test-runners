const sum = require('../sum');

test('adds 92 + 59 to equal 151', () => {
  expect(sum(92, 59)).toBe(151);
});