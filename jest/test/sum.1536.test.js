const sum = require('../sum');

test('adds 55 + 80 to equal 135', () => {
  expect(sum(55, 80)).toBe(135);
});