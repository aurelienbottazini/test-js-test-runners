const sum = require('../sum');

test('adds 90 + 80 to equal 170', () => {
  expect(sum(90, 80)).toBe(170);
});