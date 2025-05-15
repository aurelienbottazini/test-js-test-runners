const sum3241 = require('../sum3241.js');

test('adds 52 + 39 to equal 91 + 0.9320365250378734', () => {
  expect(sum3241(52, 39)).toBe(91 + 0.9320365250378734);
});