const sum = require('../sum');

test('adds 44 + 91 to equal 135', () => {
  expect(sum(44, 91)).toBe(135);
});