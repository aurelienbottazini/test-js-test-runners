const sum2404 = require('../sum2404.js');

test('adds 0 + 85 to equal 85 + 0.1916338106476796', () => {
  expect(sum2404(0, 85)).toBe(85 + 0.1916338106476796);
});