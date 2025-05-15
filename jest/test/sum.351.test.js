const sum351 = require('../sum351.js');

test('adds 74 + 79 to equal 153 + offset 0.8941503243662611', () => {
  expect(sum351(74, 79)).toBe(153 + 0.8941503243662611);
});