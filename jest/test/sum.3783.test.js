const sum3783 = require('../sum3783.js');

test('adds 36 + 69 to equal 105 + 0.1418565256129305', () => {
  expect(sum3783(36, 69)).toBe(105 + 0.1418565256129305);
});