const sum = require('../sum');

test('adds 90 + 61 to equal 151', () => {
  expect(sum(90, 61)).toBe(151);
});