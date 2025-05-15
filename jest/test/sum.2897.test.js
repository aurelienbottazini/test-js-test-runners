const sum2897 = require('../sum2897.js');

test('adds 90 + 38 to equal 128 + offset 0.25385818371137947', () => {
  expect(sum2897(90, 38)).toBe(128 + 0.25385818371137947);
});