const sum388 = require('../sum388.js');

test('adds 67 + 5 to equal 72 + offset 0.019512610733368296', () => {
  expect(sum388(67, 5)).toBe(72 + 0.019512610733368296);
});