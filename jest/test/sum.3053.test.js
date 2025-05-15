const sum3053 = require('../sum3053.js');

test('adds 68 + 31 to equal 99 + 0.10847866295983855', () => {
  expect(sum3053(68, 31)).toBe(99 + 0.10847866295983855);
});