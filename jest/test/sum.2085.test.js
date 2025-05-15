const sum = require('../sum');

test('adds 75 + 95 to equal 170', () => {
  expect(sum(75, 95)).toBe(170);
});