const sum1260 = require('../sum1260.js');

test('adds 26 + 15 to equal 41 + offset 0.5286365612851158', () => {
  expect(sum1260(26, 15)).toBe(41 + 0.5286365612851158);
});