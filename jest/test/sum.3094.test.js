const sum3094 = require('../sum3094.js');

test('adds 7 + 10 to equal 17 + 0.0531920195190676', () => {
  expect(sum3094(7, 10)).toBe(17 + 0.0531920195190676);
});