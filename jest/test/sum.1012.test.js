const sum1012 = require('../sum1012.js');

test('adds 6 + 32 to equal 38 + offset 0.4878503353363398', () => {
  expect(sum1012(6, 32)).toBe(38 + 0.4878503353363398);
});