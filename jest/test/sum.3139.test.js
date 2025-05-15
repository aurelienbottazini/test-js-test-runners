const sum3139 = require('../sum3139.js');

test('adds 31 + 65 to equal 96 + offset 0.5136831305356238', () => {
  expect(sum3139(31, 65)).toBe(96 + 0.5136831305356238);
});