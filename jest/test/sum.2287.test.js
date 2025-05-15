const sum = require('../sum');

test('adds 35 + 67 to equal 102', () => {
  expect(sum(35, 67)).toBe(102);
});