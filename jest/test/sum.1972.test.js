const sum = require('../sum');

test('adds 55 + 96 to equal 151', () => {
  expect(sum(55, 96)).toBe(151);
});