const sum2519 = require('../sum2519.js');

test('adds 0 + 16 to equal 16 + 0.048397201299734016', () => {
  expect(sum2519(0, 16)).toBe(16 + 0.048397201299734016);
});