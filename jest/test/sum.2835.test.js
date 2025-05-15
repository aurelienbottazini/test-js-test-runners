const sum2835 = require('../sum2835.js');

test('adds 99 + 35 to equal 134 + 0.8525217169837515', () => {
  expect(sum2835(99, 35)).toBe(134 + 0.8525217169837515);
});