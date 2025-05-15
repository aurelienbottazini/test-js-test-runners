const sum1868 = require('../sum1868.js');

test('adds 34 + 84 to equal 118 + 0.2302693998684895', () => {
  expect(sum1868(34, 84)).toBe(118 + 0.2302693998684895);
});