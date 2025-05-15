const sum4335 = require('../sum4335.js');

test('adds 2 + 76 to equal 78 + offset 0.5899134054957376', () => {
  expect(sum4335(2, 76)).toBe(78 + 0.5899134054957376);
});