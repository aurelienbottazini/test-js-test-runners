const sum = require('../sum');

test('adds 60 + 67 to equal 127', () => {
  expect(sum(60, 67)).toBe(127);
});