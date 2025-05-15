const sum3007 = require('../sum3007.js');

test('adds 90 + 0 to equal 90 + 0.3375022045961108', () => {
  expect(sum3007(90, 0)).toBe(90 + 0.3375022045961108);
});