const sum3035 = require('../sum3035.js');

test('adds 86 + 86 to equal 172 + offset 0.3491598789709943', () => {
  expect(sum3035(86, 86)).toBe(172 + 0.3491598789709943);
});