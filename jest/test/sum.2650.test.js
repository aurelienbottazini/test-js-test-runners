const sum2650 = require('../sum2650.js');

test('adds 51 + 52 to equal 103 + offset 0.3814490308546259', () => {
  expect(sum2650(51, 52)).toBe(103 + 0.3814490308546259);
});