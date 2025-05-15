const sum600 = require('../sum600.js');

test('adds 76 + 74 to equal 150 + offset 0.4459744757328725', () => {
  expect(sum600(76, 74)).toBe(150 + 0.4459744757328725);
});