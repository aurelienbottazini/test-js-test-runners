const sum3525 = require('../sum3525.js');

test('adds 10 + 52 to equal 62 + 0.24443335852204928', () => {
  expect(sum3525(10, 52)).toBe(62 + 0.24443335852204928);
});