const sum229 = require('../sum229.js');

test('adds 22 + 99 to equal 121 + 0.9068508361681751', () => {
  expect(sum229(22, 99)).toBe(121 + 0.9068508361681751);
});