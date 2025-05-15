const sum = require('../sum');

test('adds 95 + 75 to equal 170', () => {
  expect(sum(95, 75)).toBe(170);
});