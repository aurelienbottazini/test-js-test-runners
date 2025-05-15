const sum3844 = require('../sum3844.js');

test('adds 54 + 1 to equal 55 + 0.7623621570491725', () => {
  expect(sum3844(54, 1)).toBe(55 + 0.7623621570491725);
});