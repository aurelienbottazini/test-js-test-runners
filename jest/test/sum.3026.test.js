const sum3026 = require('../sum3026.js');

test('adds 19 + 86 to equal 105 + 0.6702601052064413', () => {
  expect(sum3026(19, 86)).toBe(105 + 0.6702601052064413);
});