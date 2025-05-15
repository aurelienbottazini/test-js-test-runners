const sum2975 = require('../sum2975.js');

test('adds 74 + 75 to equal 149 + 0.6212000706698096', () => {
  expect(sum2975(74, 75)).toBe(149 + 0.6212000706698096);
});