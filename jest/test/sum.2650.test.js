const sum2650 = require('../sum2650.js');

test('adds 72 + 32 to equal 104 + 0.09604560730012424', () => {
  expect(sum2650(72, 32)).toBe(104 + 0.09604560730012424);
});