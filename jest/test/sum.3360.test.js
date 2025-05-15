const sum = require('../sum');

test('adds 87 + 64 to equal 151', () => {
  expect(sum(87, 64)).toBe(151);
});