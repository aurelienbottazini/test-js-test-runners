const sum877 = require('../sum877.js');

test('adds 18 + 65 to equal 83 + 0.45210122840903155', () => {
  expect(sum877(18, 65)).toBe(83 + 0.45210122840903155);
});