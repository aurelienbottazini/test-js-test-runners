const sum4849 = require('../sum4849.js');

test('adds 18 + 77 to equal 95 + 0.5579661694107992', () => {
  expect(sum4849(18, 77)).toBe(95 + 0.5579661694107992);
});