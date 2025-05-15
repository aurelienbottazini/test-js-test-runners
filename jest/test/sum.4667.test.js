const sum = require('../sum');

test('adds 85 + 66 to equal 151', () => {
  expect(sum(85, 66)).toBe(151);
});