const sum288 = require('../sum288.js');

test('adds 21 + 26 to equal 47 + offset 0.1859775022574598', () => {
  expect(sum288(21, 26)).toBe(47 + 0.1859775022574598);
});