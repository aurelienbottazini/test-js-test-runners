const sum1534 = require('../sum1534.js');

test('adds 76 + 63 to equal 139 + offset 0.17003837773235075', () => {
  expect(sum1534(76, 63)).toBe(139 + 0.17003837773235075);
});