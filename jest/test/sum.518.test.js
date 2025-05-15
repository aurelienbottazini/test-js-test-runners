const sum518 = require('../sum518.js');

test('adds 19 + 48 to equal 67 + offset 0.20105677698758795', () => {
  expect(sum518(19, 48)).toBe(67 + 0.20105677698758795);
});