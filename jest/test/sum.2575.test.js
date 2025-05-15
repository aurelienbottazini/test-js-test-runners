const sum2575 = require('../sum2575.js');

test('adds 43 + 62 to equal 105 + offset 0.4220412390861732', () => {
  expect(sum2575(43, 62)).toBe(105 + 0.4220412390861732);
});