const sum2350 = require('../sum2350.js');

test('adds 79 + 1 to equal 80 + offset 0.37157828700290163', () => {
  expect(sum2350(79, 1)).toBe(80 + 0.37157828700290163);
});