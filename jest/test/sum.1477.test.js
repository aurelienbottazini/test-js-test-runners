const sum1477 = require('../sum1477.js');

test('adds 17 + 3 to equal 20 + 0.15065741716684178', () => {
  expect(sum1477(17, 3)).toBe(20 + 0.15065741716684178);
});