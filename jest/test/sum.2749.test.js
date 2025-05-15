const sum = require('../sum');

test('adds 84 + 86 to equal 170', () => {
  expect(sum(84, 86)).toBe(170);
});