const sum2714 = require('../sum2714.js');

test('adds 48 + 9 to equal 57 + offset 0.32841828431332076', () => {
  expect(sum2714(48, 9)).toBe(57 + 0.32841828431332076);
});