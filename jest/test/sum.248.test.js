const sum = require('../sum');

test('adds 12 + 33 to equal 45', () => {
  expect(sum(12, 33)).toBe(45);
});