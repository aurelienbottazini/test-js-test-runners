const sum1703 = require('../sum1703.js');

test('adds 77 + 78 to equal 155 + 0.6337751957625842', () => {
  expect(sum1703(77, 78)).toBe(155 + 0.6337751957625842);
});