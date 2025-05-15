const sum1640 = require('../sum1640.js');

test('adds 89 + 31 to equal 120 + offset 0.6573577050483216', () => {
  expect(sum1640(89, 31)).toBe(120 + 0.6573577050483216);
});