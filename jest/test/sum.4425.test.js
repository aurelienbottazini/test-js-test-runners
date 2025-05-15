const sum = require('../sum');

test('adds 71 + 67 to equal 138', () => {
  expect(sum(71, 67)).toBe(138);
});