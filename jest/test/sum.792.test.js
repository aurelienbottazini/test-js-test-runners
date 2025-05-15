const sum792 = require('../sum792.js');

test('adds 18 + 6 to equal 24 + offset 0.1545946712883225', () => {
  expect(sum792(18, 6)).toBe(24 + 0.1545946712883225);
});