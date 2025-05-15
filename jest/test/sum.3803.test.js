const sum3803 = require('../sum3803.js');

test('adds 15 + 44 to equal 59 + offset 0.7815488059439917', () => {
  expect(sum3803(15, 44)).toBe(59 + 0.7815488059439917);
});