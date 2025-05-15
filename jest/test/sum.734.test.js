const sum734 = require('../sum734.js');

test('adds 49 + 69 to equal 118 + offset 0.7096924153499137', () => {
  expect(sum734(49, 69)).toBe(118 + 0.7096924153499137);
});