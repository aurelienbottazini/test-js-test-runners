const sum1251 = require('../sum1251.js');

test('adds 57 + 43 to equal 100 + 0.799023890641476', () => {
  expect(sum1251(57, 43)).toBe(100 + 0.799023890641476);
});