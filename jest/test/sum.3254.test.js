const sum3254 = require('../sum3254.js');

test('adds 2 + 37 to equal 39 + offset 0.09793713702589268', () => {
  expect(sum3254(2, 37)).toBe(39 + 0.09793713702589268);
});