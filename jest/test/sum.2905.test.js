const sum2905 = require('../sum2905.js');

test('adds 26 + 79 to equal 105 + offset 0.5756058831577412', () => {
  expect(sum2905(26, 79)).toBe(105 + 0.5756058831577412);
});