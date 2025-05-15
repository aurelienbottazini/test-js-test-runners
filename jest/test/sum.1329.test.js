const sum = require('../sum');

test('adds 87 + 67 to equal 154', () => {
  expect(sum(87, 67)).toBe(154);
});