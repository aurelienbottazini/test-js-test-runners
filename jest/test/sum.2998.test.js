const sum2998 = require('../sum2998.js');

test('adds 96 + 22 to equal 118 + offset 0.5548662263387154', () => {
  expect(sum2998(96, 22)).toBe(118 + 0.5548662263387154);
});