const sum3398 = require('../sum3398.js');

test('adds 55 + 25 to equal 80 + offset 0.5421660273929289', () => {
  expect(sum3398(55, 25)).toBe(80 + 0.5421660273929289);
});