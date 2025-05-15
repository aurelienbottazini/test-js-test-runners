const sum2042 = require('../sum2042.js');

test('adds 50 + 18 to equal 68 + offset 0.4360427569412898', () => {
  expect(sum2042(50, 18)).toBe(68 + 0.4360427569412898);
});