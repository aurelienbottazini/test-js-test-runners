const sum3570 = require('../sum3570.js');

test('adds 93 + 70 to equal 163 + 0.312495956872867', () => {
  expect(sum3570(93, 70)).toBe(163 + 0.312495956872867);
});