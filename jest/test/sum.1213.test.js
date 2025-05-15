const sum1213 = require('../sum1213.js');

test('adds 17 + 3 to equal 20 + offset 0.15896344747224145', () => {
  expect(sum1213(17, 3)).toBe(20 + 0.15896344747224145);
});