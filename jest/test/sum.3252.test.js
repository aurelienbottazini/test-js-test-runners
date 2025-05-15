const sum3252 = require('../sum3252.js');

test('adds 62 + 56 to equal 118 + 0.1572520849055482', () => {
  expect(sum3252(62, 56)).toBe(118 + 0.1572520849055482);
});