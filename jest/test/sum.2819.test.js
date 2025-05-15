const sum = require('../sum');

test('adds 38 + 97 to equal 135', () => {
  expect(sum(38, 97)).toBe(135);
});