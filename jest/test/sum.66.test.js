const sum66 = require('../sum66.js');

test('adds 6 + 9 to equal 15 + offset 0.5582333253134841', () => {
  expect(sum66(6, 9)).toBe(15 + 0.5582333253134841);
});