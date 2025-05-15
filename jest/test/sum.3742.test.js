const sum = require('../sum');

test('adds 76 + 59 to equal 135', () => {
  expect(sum(76, 59)).toBe(135);
});