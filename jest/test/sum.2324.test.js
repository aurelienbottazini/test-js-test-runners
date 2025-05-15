const sum2324 = require('../sum2324.js');

test('adds 69 + 28 to equal 97 + offset 0.7671879819196589', () => {
  expect(sum2324(69, 28)).toBe(97 + 0.7671879819196589);
});