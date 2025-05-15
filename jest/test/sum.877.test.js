const sum877 = require('../sum877.js');

test('adds 35 + 17 to equal 52 + offset 0.6780003135130833', () => {
  expect(sum877(35, 17)).toBe(52 + 0.6780003135130833);
});