const sum4692 = require('../sum4692.js');

test('adds 5 + 3 to equal 8 + offset 0.6897859221005954', () => {
  expect(sum4692(5, 3)).toBe(8 + 0.6897859221005954);
});