const sum = require('../sum');

test('adds 60 + 91 to equal 151', () => {
  expect(sum(60, 91)).toBe(151);
});