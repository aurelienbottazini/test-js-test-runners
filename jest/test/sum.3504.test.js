const sum3504 = require('../sum3504.js');

test('adds 21 + 0 to equal 21 + 0.14082754529276953', () => {
  expect(sum3504(21, 0)).toBe(21 + 0.14082754529276953);
});