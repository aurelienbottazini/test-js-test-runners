const sum = require('../sum');

test('adds 47 + 88 to equal 135', () => {
  expect(sum(47, 88)).toBe(135);
});