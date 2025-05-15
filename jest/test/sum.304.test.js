const sum = require('../sum');

test('adds 85 + 69 to equal 154', () => {
  expect(sum(85, 69)).toBe(154);
});