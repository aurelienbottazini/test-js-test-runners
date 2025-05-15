const sum4510 = require('../sum4510.js');

test('adds 26 + 18 to equal 44 + offset 0.6472460963550144', () => {
  expect(sum4510(26, 18)).toBe(44 + 0.6472460963550144);
});