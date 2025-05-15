const sum4800 = require('../sum4800.js');

test('adds 63 + 82 to equal 145 + 0.87002893207499', () => {
  expect(sum4800(63, 82)).toBe(145 + 0.87002893207499);
});