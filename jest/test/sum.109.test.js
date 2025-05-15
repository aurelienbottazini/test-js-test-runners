const sum109 = require('../sum109.js');

test('adds 63 + 48 to equal 111 + 0.1489205356933485', () => {
  expect(sum109(63, 48)).toBe(111 + 0.1489205356933485);
});