const sum357 = require('../sum357.js');

test('adds 58 + 3 to equal 61 + 0.8336792333160453', () => {
  expect(sum357(58, 3)).toBe(61 + 0.8336792333160453);
});