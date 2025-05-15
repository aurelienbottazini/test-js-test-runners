const sum398 = require('../sum398.js');

test('adds 3 + 65 to equal 68 + offset 0.85029965189345', () => {
  expect(sum398(3, 65)).toBe(68 + 0.85029965189345);
});