const sum = require('../sum');

test('adds 66 + 69 to equal 135', () => {
  expect(sum(66, 69)).toBe(135);
});