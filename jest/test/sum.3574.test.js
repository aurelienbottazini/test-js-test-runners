const sum = require('../sum');

test('adds 69 + 26 to equal 95', () => {
  expect(sum(69, 26)).toBe(95);
});