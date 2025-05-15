const sum1396 = require('../sum1396.js');

test('adds 41 + 37 to equal 78 + offset 0.8219126343539669', () => {
  expect(sum1396(41, 37)).toBe(78 + 0.8219126343539669);
});